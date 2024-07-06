import { images } from "../rsrc";
import { getHeaderNavLinks, homeLink, linkSpec, requestDemoLink } from "./navigation";
export interface headerSpec{
    requestDemoLink: linkSpec;
    logo:string;//path to logo
    logoLink:linkSpec
    navLinks:linkSpec[];
    //no login/signup button [yet?].
}
export const headerData:headerSpec = {
    logo:images.logo,
    logoLink:homeLink,
    navLinks:getHeaderNavLinks(),
    requestDemoLink:requestDemoLink
}
