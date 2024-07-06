import { images } from "../rsrc";
import { getSocialIconOnlyLinks, linkSpec, policyLinks, quickLinks } from "./navigation"

export interface footerSpec{
    socialLinks:linkSpec[];
    quickLinksTitle:string;
    quickLinks:linkSpec[];
    policyLinksTitle:string;
    policyLinks:linkSpec[];
    // enter your email
    // address title
    addressTitle:string;
    address:string;
    businessDetails:string[];
    // cin link
    // gst link
    copyrightText:string;
    logo:string;
}

export const footerData:footerSpec = {
    logo:images.footerLogo,
    socialLinks:getSocialIconOnlyLinks(),
    copyrightText:`© 2024 Shweta Labs. A Unit of Anjana Group of Companies`,
    policyLinks:policyLinks,
    policyLinksTitle:`POLICY`,
    quickLinks:quickLinks,
    quickLinksTitle:`QUICK LINKS`,
    address:'Belgaum, KA, INDIA. 590 001',
    addressTitle:`ADDRESS`,
    businessDetails:[
        `CIN: U62013KA2023OPC178060`,
        `GST: 29ABLCS6015J1ZX`
    ]
}
