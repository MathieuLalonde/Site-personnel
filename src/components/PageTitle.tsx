import { useEffect } from "react";

interface Props {
  // siteName?: string;
  children?: string;
  noSiteName?: boolean;
  description?: string;
}

const PageTitle = ({ children = "", noSiteName = false, description = "" }: Props) => {
  let siteName = "Mathieu Lalonde"
  
  useEffect(() => {
    if (siteName) {
      document.title = noSiteName ?
        children : children ?
          `${children} | ${siteName}` : siteName;
    }

    if (description) {
      let meta = document.querySelector<HTMLMetaElement>(
        "meta[name='description']"
      );
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [siteName, description]);

  return null;
};

export default PageTitle