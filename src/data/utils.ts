// import { Route } from "@angular/router";

import { routeSpec } from "./navigation";

export interface paraSpec {
    text?: string;
    list?: string[];
    internalLink?: routeSpec;
    image?: string;
    reverse?: boolean;
}

// export interface staggeredParaSpec {
// 	paras : paraSpec[];
// }

export interface textPageSpec {
    title: string;
    paragraphs: paraSpec[];
}
// use the linkSpec in navigation.ts
// export interface linkSpec {
//     target: string;
//     label: string;
//     type?: 'facebook' | 'twitter' | 'email' | 'webpage' | 'resume';
// }

export interface VersatilePageSpec {
    title: string;
    groups: {
        title?: string;
        paragraphs: paraSpec[];
    }[];
}


export function objectToVals<T>(object: { [key: string]: T }): T[] {
    return Object.keys(object).map((key) => object[key]);
}
// export function parseRouteSpec(routespec: routeSpec) {
//     let route: Route = {};
//     if (routespec.component) {
//         route = {
//             path: routespec.route,
//             component: routespec.component
//         };
//     }
//     else {
//         if (routespec.children) {
//             let basePath = routespec.children[0].route!.split(`/`)[0];
//             route = {
//                 path: basePath,
//                 children: routespec.children.map((childRouteSpec, index, value) => {
//                     if(childRouteSpec.route?.startsWith('http')){
//                         return {};
//                     }
//                     let childRoute: Route = {
//                         path: childRouteSpec.route?.split(`/`).slice(1, undefined).join(`/`),
//                         component: childRouteSpec.component
//                     };
//                     return childRoute;
//                 }).filter((route)=>Object.keys(route).length!==0)
//             };
//         }
//     }
//     return route;
// }
//
// export function parseRoutes(navbarroutes:routeSpec[]):Route[]{
//     const routes:Route[] = navbarroutes.map((routespec)=>{
//         return parseRouteSpec(routespec);
//     }).filter((route)=>Object.keys(route).length!==0);
//     return routes;
// }
// export function dictionaryToRouteList(dict:{[key:string]:any},basePath:string,component:any):routeSpec[]{
//     return Object.keys(dict).map((key)=>{
//         return {
//             route:`${basePath}${key}`,
//             component:component,
//             label:key
//         }
//     })
// }
