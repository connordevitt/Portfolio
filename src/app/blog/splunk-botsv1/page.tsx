import PostShell from "../../../components/blog/PostShell";
import { getPost, type Block } from "../../../content/posts";

const post = getPost("splunk-botsv1");

const IMG = "/images/blog/splunk-botsv1";

const blocks: Block[] = [
  {
    type: "intro",
    text: "Working through the BOTSv1 training dataset to practice SPL and SOC investigation methodology. This is a known training scenario with published answers; the goal here is to demonstrate process, not to present original research.",
  },
  {
    type: "heading",
    text: "Starting Point",
  },
  {
    type: "paragraph",
    text: "To begin the investigation, I first ran a query to identify which index held data worth working through. Once the index was confirmed, I reviewed the available log sources (IIS web logs, `stream:http`, Suricata, Sysmon, Windows Security, and a Fortinet firewall, among others) and ran the query below to identify the top-talking IP:",
  },
  {
    type: "code",
    label: "SPL",
    code: "index=* sourcetype=stream:http | stats count by src_ip | sort -count",
  },
  {
    type: "image",
    src: `${IMG}/01-top-talkers.png`,
    alt: "Splunk results table listing source IPs by event count, with 40.80.148.42 at the top with 17,547 events.",
    caption: "Source IPs ranked by event count — one host dominates the traffic.",
  },
  {
    type: "paragraph",
    text: "IP 40.80.148.42 was the loudest by a wide margin, with a count of 17,547. That volume alone doesn’t prove anything malicious, so the next step was to look at what it was actually doing.",
  },
  {
    type: "heading",
    text: "Identifying the Activity",
  },
  {
    type: "paragraph",
    text: "To see the raw traffic from that IP, I ran the following query:",
  },
  {
    type: "code",
    label: "SPL",
    code: 'index=* sourcetype=stream:http src_ip="40.80.148.42"',
  },
  {
    type: "paragraph",
    text: "I then wanted to check the user agent this IP was sending, since an automated scanner will usually give itself away there:",
  },
  {
    type: "code",
    label: "SPL",
    code: 'index=* sourcetype=stream:http src_ip="40.80.148.42" | stats count by http_user_agent',
  },
  {
    type: "image",
    src: `${IMG}/02-user-agents.png`,
    alt: "Splunk results showing injection payloads appearing in the http_user_agent field instead of real browser user agents.",
    caption:
      "The User-Agent header is carrying payloads, not browser identifiers.",
  },
  {
    type: "paragraph",
    text: "The results made the intent obvious: the “user agents” weren’t user agents at all; they were attack payloads being injected into the User-Agent header. The set was a mix of injection classes, not just one. There was SQL injection (time-based and boolean-based blind, e.g. `waitfor delay '0:0:9'` and `(select(0)from(select(sleep(9)))v)`), command injection (`$(nslookup ...)`, `&nslookup ...&`), and clear fingerprints from the Acunetix web vulnerability scanner (`acunetix_wvs_security_test`). So this was an automated scanner throwing injection payloads across every field it could reach, including the headers.",
  },
  {
    type: "heading",
    text: "Finding the Credentials",
  },
  {
    type: "paragraph",
    text: "Knowing the target was a Joomla site, I looked at POST requests to the administrator path to see what was being submitted to the login and any admin functions:",
  },
  {
    type: "code",
    label: "SPL",
    code: 'index=* sourcetype=stream:http http_method=POST uri_path="*administrator*" | stats count by src_ip, uri_path',
  },
  {
    type: "image",
    src: `${IMG}/03-admin-posts.png`,
    alt: "Splunk results table showing POST counts to administrator paths grouped by source IP and URI path, with 23.22.63.114 accounting for 412 hits on the Joomla admin login.",
    caption: "Where the administrator POSTs are concentrated, and from whom.",
  },
  {
    type: "paragraph",
    text: "This stats query doesn’t show the request bodies itself; it returns counts and points you at where the interesting POSTs are concentrated. The credentials are in the raw events. Inspecting the `form_data` field on the returned events revealed the actual login attempt:",
  },
  {
    type: "code",
    label: "form_data",
    code: "username=admin&passwd=batman&option=com_login&task=login",
  },
  {
    type: "paragraph",
    text: "The raw events also showed post-compromise activity in the same administrator POSTs: `com_extplorer` file-manager actions (browsing the server’s filesystem) and a large URL-encoded `install_package=<?php ...` payload, an obfuscated PHP web shell being uploaded into the web root (`C:\\inetpub\\wwwroot\\joomla\\tmp`). Those actions are only reachable from an authenticated admin session, which becomes important for confirming the login worked.",
  },
  {
    type: "note",
    text: "(If you want the credential to appear directly in the results table rather than by opening the raw events, `... uri_path=\"*administrator*\" | table _time, src_ip, form_data` pulls the POST body into the output.)",
  },
  {
    type: "heading",
    text: "Two Different Attackers",
  },
  {
    type: "paragraph",
    text: "Looking closer at the successful credential, I noticed something worth flagging: the brute-force and the interactive login came from two different hosts.",
  },
  {
    type: "list",
    items: [
      "The brute-force that cracked the password ran from **23.22.63.114** using the user agent `Python-urllib/2.7`, an automated script.",
      "The interactive login using the discovered password came from **40.80.148.42** in a real browser (`Mozilla/5.0 ... Trident/7.0`), arriving from the admin login page.",
    ],
  },
  {
    type: "paragraph",
    text: "Same password, two tools, two IPs. The attacker scanned and brute-forced from one host and then logged in by hand from another. That separation is easy to miss if you assume a single IP did everything.",
  },
  {
    type: "heading",
    text: "Confirming the Login Actually Succeeded",
  },
  {
    type: "paragraph",
    text: "A login attempt isn’t a compromise until the server confirms it accepted the credentials, so I didn’t want to assume success. I pulled everything 40.80.148.42 did against the administrator path in time order:",
  },
  {
    type: "code",
    label: "SPL",
    code: 'index=* sourcetype=stream:http src_ip="40.80.148.42" uri_path="*administrator*" | sort _time | table _time, uri_path, http_method, status',
  },
  {
    type: "image",
    src: `${IMG}/04-status-timeline.png`,
    alt: "Splunk table of administrator requests in time order: a run of 404 responses to component paths, then a GET 200 on the login page, a POST 303, and further GET 200 responses into the admin index.",
    caption:
      "The request timeline: probing 404s, then the login sequence that sticks.",
  },
  {
    type: "paragraph",
    text: "Read from top to bottom; the table tells the whole story:",
  },
  {
    type: "list",
    items: [
      "Early requests to paths like `/administrator.cgi` and a run of `ofc_upload_image.php` endpoints all returned **404**, the scanner probing for known-vulnerable paths and finding nothing.",
      "Then the sequence turns: a **GET 200** loads the login page, a **POST 303** submits `admin:batman` and redirects, and a series of **GET 200** requests follow into `/administrator/index.php`, ending with the admin template’s CSS loading (**304**).",
    ],
  },
  {
    type: "paragraph",
    text: "The key detail is that a successful Joomla login doesn’t return a 200; it returns a **303 redirect** into the admin area. A failed login loops back to the login page. Here the 303 is bracketed by a GET of the login form before it and authenticated admin-panel requests after it, including admin UI assets that can only load inside a real session. That confirms the credential worked.",
  },
  {
    type: "heading",
    text: "Full Chain",
  },
  {
    type: "paragraph",
    text: "Reconstructed entirely from raw HTTP logs:",
  },
  {
    type: "list",
    ordered: true,
    items: [
      "Automated scan with Acunetix, throwing SQLi and command-injection payloads (404s, no success).",
      "Brute-force of the Joomla admin login from a Python script (23.22.63.114).",
      "Successful crack of the credential `admin:batman`.",
      "Interactive login from a browser (40.80.148.42), confirmed by the 303-then-200 sequence.",
      "File-manager activity via eXtplorer and upload of a PHP web shell to the web root for persistence.",
    ],
  },
  {
    type: "paragraph",
    text: "Initial access through a foothold, with attacker infrastructure separation and successful-login confirmation all visible in the traffic.",
  },
];

export default function SplunkBotsv1Post() {
  return <PostShell post={post} blocks={blocks} />;
}
