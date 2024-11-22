import { icons, images } from '../rsrc';
import {
  getSocialIconOnlyLinks,
  linkSpec,
  policyLinks,
  quickLinks,
} from './navigation';

export interface footerSpec {
  socialLinks: linkSpec[];
  quickLinksTitle: string;
  quickLinks: linkSpec[];
  policyLinksTitle: string;
  policyLinks: linkSpec[];
  // enter your email
  // address title
  addressTitle: string;
  address: string;
  businessDetails: string[];
  // cin link
  // gst link
  copyrightText: string;
  logo: string;
}

export const footerData = {
  logo: images.footerLogo,
  socialLinks: getSocialIconOnlyLinks(),
  copyrightText: `© 2024 Shweta Labs. A Unit of Anjana Group of Companies`,
  policyLinks: policyLinks,
  policyLinksTitle: `RESOURCES`,
  quickLinks: quickLinks,
  quickLinksTitle: `QUICK LINKS`,
  addressTitle: `ADDRESS`,
  businessDetails: [
    {
      icon: icons.location,
      text: `<strong>Shweta Labs (OPC) Private Limited</strong><br/> 
             Belgaum, KA, INDIA - 590 001`,
    },
    {
      icon: icons.phone,
      text: `+91 99014 93300`,
    },
    {
      icon: icons.mail,
      text: `contacts@shwetalabs.com`,
    },
    {
      icon: icons.cin,
      text: `U62013KA2023OPC178060`,
    },
  ],
};
