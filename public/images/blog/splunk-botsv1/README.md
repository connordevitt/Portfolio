# splunk-botsv1 screenshots

Four Splunk screenshots backing the write-up, in the order they appear:

| File | Shows |
| --- | --- |
| `01-top-talkers.png` | `stats count by src_ip \| sort -count` results, 40.80.148.42 at the top with 17,547 |
| `02-raw-events.png` | Raw `stream:http` events from 40.80.148.42 |
| `03-user-agents.png` | `stats count by http_user_agent` — the injection payloads in the User-Agent header |
| `04-admin-posts.png` | POST counts to `*administrator*` grouped by `src_ip`, `uri_path` |

The `form_data` credential and the status-code timeline are described in text
only — there are no screenshots for those sections.

Alt text and captions live in `src/app/blog/splunk-botsv1/page.tsx`; update them
if a screenshot is ever swapped for one showing something different.
