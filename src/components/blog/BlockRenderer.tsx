import Image from "next/image";
import type { Block } from "../../content/posts";
import { renderInline } from "./richText";

function renderBlock(block: Block, key: number) {
  switch (block.type) {
    case "intro":
      return (
        <p key={key} className="intro">
          {renderInline(block.text)}
        </p>
      );

    case "heading":
      return <h2 key={key}>{renderInline(block.text)}</h2>;

    case "paragraph":
      return <p key={key}>{renderInline(block.text)}</p>;

    case "quote":
      return (
        <blockquote key={key}>
          <p>{renderInline(block.text)}</p>
          <footer>
            <cite>{block.attribution}</cite>
          </footer>
        </blockquote>
      );

    case "callout":
      return (
        <div className="blog-callout" key={key}>
          <p>{renderInline(block.text)}</p>
        </div>
      );

    case "note":
      return (
        <aside className="blog-note" key={key}>
          <p>{renderInline(block.text)}</p>
        </aside>
      );

    case "code":
      return (
        <div className="blog-code" key={key}>
          {block.label && <span className="blog-code-label">{block.label}</span>}
          <pre>
            <code>{block.code}</code>
          </pre>
        </div>
      );

    case "list": {
      const items = block.items.map((item, i) => (
        <li key={i}>{renderInline(item)}</li>
      ));
      return block.ordered ? <ol key={key}>{items}</ol> : <ul key={key}>{items}</ul>;
    }

    case "image":
      return (
        <figure className="blog-figure" key={key}>
          <Image
            className="blog-figure-img"
            src={block.src}
            alt={block.alt}
            width={block.width ?? 1600}
            height={block.height ?? 900}
          />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
  }
}

export default function BlockRenderer({
  blocks,
}: {
  blocks: readonly Block[];
}) {
  return <>{blocks.map(renderBlock)}</>;
}
