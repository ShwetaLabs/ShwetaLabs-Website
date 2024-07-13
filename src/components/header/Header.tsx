import { Link } from "react-router-dom";
import { headerData } from "../../data/header";
import { linkSpec } from "../../data/navigation";
import { LinkBox } from "../linkBox/LinkBox";

export const Header: ({}) => JSX.Element = ({}) => {
  return (
    <div
      className="row"
      style={{
        justifyContent: "space-around",
        padding: "20px",
        borderBottom: "grey 0.5px solid",
      }}
    >
      <a href={headerData.logoLink.url}>
        <img src={headerData.logo} />
      </a>
      <div className="row">
        {headerData.navLinks.map((link) => {
          return (
            <Link to={link.url}>
              <HeaderButton link={link} key={link.text} />
            </Link>
          );
        })}
      </div>
      <div>
        <LinkBox link={headerData.requestDemoLink} aClassName="button2" />
      </div>
    </div>
  );
};
interface HeaderButtonSpec {
  link: linkSpec;
}
export function HeaderButton({ link }: HeaderButtonSpec): JSX.Element {
  return (
    <a
      className="button"
      style={{ textTransform: "uppercase" }}
    >
      {link.text}
    </a>
  );
}
