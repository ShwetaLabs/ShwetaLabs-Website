import { About } from '../pages/About';
import { Blog } from '../pages/Blog';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { Podcast } from '../pages/Podcast';
import { Products } from '../pages/Products';

export interface linkSpec {
    text: string;
    url: string;
    icon?: string;
    iconOnly?: boolean;
    element?: ({ }: any) => JSX.Element;
}
//spec for routes within the website.
export interface routeSpec {
    path: string;
    element: ({ }: any) => JSX.Element;
}
const aboutLink = {
    text: 'About',
    url: '/about',
    element: About
};
const productsLink = {
    text: 'Products',
    url: '/products',
    element: Products
};
const blogLink = {
    text: 'Blog',
    url: '/blog',
    element: Blog
};
const podcastLink = {
    text: 'Podcast',
    url: '/podcast',
    element: Podcast
};
const contactLink = {
    text: 'Contact',
    url: '/contact',
    element: Contact
};
const policyLink = {
    text: 'Policy',
    url: '/',
}
/**@private*/
const staticHeaderLinks: linkSpec[] = [
    aboutLink,
    productsLink,
    blogLink,
    podcastLink,
    contactLink
];
const socialLinks: linkSpec[] = [
    {
        text: 'Youtube',
        url: '',
        icon: 'fa fa-youtube'
        //todo: fill social links
    },
    {
        text: 'Facebook',
        url: '',
        icon: 'fa fa-facebook'

    },
    {
        text: 'Instagram',
        url: '',
        icon: 'fa fa-instagram'

    },
    {
        text: 'Twitter',
        url: '',
        icon: 'fa fa-twitter'
    },
]
export const quickLinks: linkSpec[] = [
    { ...aboutLink, text: 'About Us' },
    productsLink,
    blogLink,
    podcastLink
]
export const policyLinks: linkSpec[] = [
    policyLink
]
export function getSocialIconOnlyLinks(): linkSpec[] {
    return socialLinks.map((link) => {
        return { ...link, iconOnly: true }
    });
}
export const homeLink: linkSpec = {
    text: 'Home',
    url: '/',
    element: Home
}

export function getHeaderNavLinks(): linkSpec[] {
    //using a function to allow dynamic/programmed collection of links.
    return staticHeaderLinks;
}

export function getMainAppRoutes(): routeSpec[] {
    //using a function to allow dynamic/programmed collection of links.
    const routes: routeSpec[] = [];
    routes.push(...getHeaderNavLinks().map(link => linkToRoute(link)));
    routes.push(linkToRoute(homeLink));
    return routes;
}

function linkToRoute(link: linkSpec): routeSpec {
    if (!(link.element)) {
        throw "Links passed to linkToRoute must specify a react element!";
    }
    return { path: link.url, element: link.element };
}
