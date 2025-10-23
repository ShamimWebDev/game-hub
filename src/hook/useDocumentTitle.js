import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} | GameHub` : "GameHub";
  }, [title]);
};

export default useDocumentTitle;
