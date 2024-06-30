import { images } from "../rsrc";
import { getSocialIconOnlyLinks, linkSpec, policyLinks, quickLinks } from "./navigation"

export interface footerSpec{
    socialLinks:linkSpec[];
    quickLinksTitle:string;
    quickLinks:linkSpec[];
    policyLinksTitle:string;
    policyLinks:linkSpec[];
    subscribeToNewsletterTitle:string;
    // enter your email
    // address title
    // address
    // cin link
    // gst link
    copyrightText:string;
    logo:string;
}

export const footerData:footerSpec = {
    logo:images.logo,
    socialLinks:getSocialIconOnlyLinks(),
    copyrightText:`© 2024 Shweta Labs. A Unit of Anjana Group of Companies`,
    policyLinks:policyLinks,
    policyLinksTitle:`POLICY`,
    quickLinks:quickLinks,
    quickLinksTitle:`QUICK LINKS`,
    subscribeToNewsletterTitle:`SUBSCRIBE TO OUR NEWSLETTER`
}