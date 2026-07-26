import {
  buildArticleJsonLd,
  buildPostMetadata,
  getPost,
} from "../../../content/posts";

const post = getPost("splunk-botsv1");

export const metadata = buildPostMetadata(post);

export default function SplunkBotsv1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleJsonLd(post)),
        }}
      />
      {children}
    </>
  );
}
