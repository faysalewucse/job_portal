import { siteName } from "../constant";

const useTitle = (title) => {
  document.title = `${siteName} | ${title}`;
};

export default useTitle;
