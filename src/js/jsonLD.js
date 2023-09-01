import siteData from "../data/siteData.json";

export default function jsonLDGenerator({ type, post, pathname }) {
  if (type === "post") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${pathname}"
        },
        "headline": "${post.title}",
        "description": "${post.description}",
        "image": "${post.image.src}",
        "author": {
          "@type": "Person",
          "name": "${post.author}"
        },
        "datePublished": "${post.pubDate}"
      }
    </script>`;
  } else if (type === "website") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "${siteData.title}",
        "url": "${import.meta.env.SITE}"
      }
    </script>`;
  }

  return "";
}
