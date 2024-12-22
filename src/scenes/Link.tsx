import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const LowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${selectedPage === LowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
      href={`#${LowerCasePage}`}
      onClick={() => setSelectedPage(LowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
