import {About} from '../pages/About';
import { Blog } from '../pages/Blog';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { Podcast } from '../pages/Podcast';
import { Products } from '../pages/Products';
export interface linkSpec{
    text:string;
    url:string;
    element?:({}:any)=>JSX.Element;
}
//spec for routes within the website.
export interface routeSpec{
    path:string;
    element:({}:any)=>JSX.Element;
}
/**@private*/
const staticHeaderLinks:linkSpec[] = [
    {
        text:'About',
        url:'/about',
        element:About
    },
    {
        text:'Products',
        url:'/products',
        element:Products
    },
    {
        text:'Blog',
        url:'/blog',
        element:Blog
    },
    {
        text:'Podcast',
        url:'/podcast',
        element:Podcast
    },
    {
        text:'Contact',
        url:'/contact',
        element:Contact
    }
];
export const homeLink:linkSpec = {
    text:'Home',
    url:'/',
    element:Home
}
export function getHeaderNavLinks():linkSpec[]{
    //using a function to allow dynamic/programmed collection of links.
    return staticHeaderLinks;
}


export function getMainAppRoutes():routeSpec[]{
    //using a function to allow dynamic/programmed collection of links.
    const routes:routeSpec[] = [];
    routes.push(...getHeaderNavLinks().map(link=>linkToRoute(link)));
    routes.push(linkToRoute(homeLink));
    return routes;
}

function linkToRoute(link:linkSpec):routeSpec{
    if (!(link.element)) {
        throw "Links passed to linkToRoute must specify a react element!";
    }
    return { path: link.url, element: link.element };
}
