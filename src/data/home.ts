import { images } from "../rsrc";
import { contactLink } from "./navigation";

export const advertData={
    title:'For Enforcement and Enforcers',
    description:`Shweta Labs Cyber-Security tools are made for law enforcement agencies - keeping the end user - the investigating officer or “enforcer” - in mind. Our tools are easy-to-use and “enforcer-friendly.”`,
    descriptionBesideLogo:`Our belief is that threats of the future will be in cyberspace. Be it terrorism, trafficking, fraud or information warfare. Our services work proactively to discover threats before they happen; or reactively, in eliminating them as they occur.`,
    logo:images.footerLogo
}

export const trustedPartnersData={
    title:'Our Trusted Partners',
    description:`Qui numquam blanditiis est aut dicta. Ab unde qui adipisci harum alias est qui temporibus aut. Accusantium eligendi est veniam qui praesentium dolorum. `,
    logos:[
        images.dummyLogo,
        images.dummyLogo,
        images.dummyLogo,
        images.dummyLogo,
        images.dummyLogo,
        images.dummyLogo,
        images.dummyLogo,
        images.dummyLogo,
        images.dummyLogo,
        images.dummyLogo,
        images.dummyLogo,
        images.dummyLogo,
    ]

}
export interface featureSpec{
    title:string;
    description:string;
    image:string;
    learnMoreUrl?:string;
}
export interface whatWeHaveSpec{
    learnMore:string;
    title:string;
    features:featureSpec[];
}
export const whatWeHaveData:whatWeHaveSpec = {
    learnMore:'Learn More',
    title:'Secure and Speed-up your Investigation',
    features:[
        {
            title:`Next Gen Defence`,
            description:`Our belief is that the threats of the future will be in cyberspace. Our services work proactively to discover threats before they happen; or reactively, in eliminating them as they occur.`,
            image:images.shieldCircuit,
        },
        {
            title:`Digital Detectives`,
            description:`Our tools use language that you and I would, They interpret and convey their findings in relatable and understandable language.`,
            image:images.detective,
            learnMoreUrl:`/contact`
        },
        {
            title:`Complexity and Simplicity`,
            description:`Our services are designed to handle vast amounts of investigative data and decode them in simple and implementation-friendly language to a Law Enforcement Officer.`,
            image:images.decoding,
            learnMoreUrl:`/contact`
        },
        {
            title:`Multi-purpose and Multi-dimensional`,
            description:`Shweta Labs is a full-circle cyber security company. Each of our tools are meant to be a spokes of a wheel of investigation - providing end-to-end - investigation and threat-elimination - services.`,
            image:images.gear,
            learnMoreUrl:`/contact`
        },
    ]
}