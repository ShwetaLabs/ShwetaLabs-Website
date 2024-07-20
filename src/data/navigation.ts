import { About } from '../pages/About';
import { Blog } from '../pages/Blog';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { Podcast } from '../pages/Podcast';
import { Products } from '../pages/Products';
import { Services } from '../pages/Services';
import { icons } from '../rsrc';
export interface linkSpec {
  text: string;
  url: string;
  icon?: string;
  iconOnly?: boolean;
  element?: ({}: any) => JSX.Element;
}
//spec for routes within the website.
export interface routeSpec {
  path: string;
  element: ({}: any) => JSX.Element;
}
export const aboutLink = {
  text: 'About',
  url: '/about',
  element: About,
};
export const productsLink = {
  text: 'Products',
  url: '/products',
  element: Products,
};

const servicesLink = {
  text: 'Services',
  url: '/services',
  element: Services,
};
export const blogLink = {
  text: 'Blog',
  url: '/blog',
  element: Blog,
};
export const podcastLink = {
  text: 'Podcast',
  url: '/podcast',
  element: Podcast,
};
export const contactLink = {
  text: 'Contact',
  url: '/contact',
  element: Contact,
};
export const policyLink = {
  text: 'Policy',
  url: '/',
};
/**@private*/
const staticHeaderLinks: linkSpec[] = [
  aboutLink,
  productsLink,
  servicesLink,
  podcastLink,
  blogLink,
  // contactLink
];
const socialLinks: linkSpec[] = [
  {
    text: 'Youtube',
    url: '',
    icon: icons.youtube,
    //todo: fill social links
  },
  {
    text: 'Facebook',
    url: '',
    icon: icons.facebook,
  },
  {
    text: 'Instagram',
    url: '',
    icon: icons.instagram,
  },
  {
    text: 'Twitter',
    url: '',
    icon: icons.twitter,
  },
];
export const quickLinks: linkSpec[] = [
  { ...aboutLink, text: 'About Us' },
  productsLink,
  blogLink,
  podcastLink,
];
const termsLink = {
  text: 'Terms',
  url: ``,
};
const privacyAndSecurityLink = {
  text: 'Privacy and Security',
  url: ``,
};
const cookiesLink = {
  text: 'Cookies',
  url: '',
};
const patentsLink = {
  text: 'Patents',
  url: '',
};
// may change this to button, onclick if action is too wild.
export const requestDemoLink: linkSpec = {
  text: 'REQUEST DEMO',
  url: '',
};
export const policyLinks: linkSpec[] = [
  termsLink,
  privacyAndSecurityLink,
  cookiesLink,
];
export function getSocialIconOnlyLinks(): linkSpec[] {
  return socialLinks.map(link => {
    return { ...link, iconOnly: true };
  });
}
export const homeLink: linkSpec = {
  text: 'Home',
  url: '/home',
  element: Home,
};

export function getHeaderNavLinks(): linkSpec[] {
  //using a function to allow dynamic/programmed collection of links.
  return staticHeaderLinks;
}

export function getMainAppRoutes(): routeSpec[] {
  //using a function to allow dynamic/programmed collection of links.
  const routes: routeSpec[] = [];
  routes.push(...getHeaderNavLinks().map(link => linkToRoute(link)));
  routes.push(linkToRoute(homeLink));
  routes.push(linkToRoute(contactLink));
  return routes;
}

function linkToRoute(link: linkSpec): routeSpec {
  if (!link.element) {
    throw 'Links passed to linkToRoute must specify a react element!';
  }
  return { path: link.url, element: link.element };
}
