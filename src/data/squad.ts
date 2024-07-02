import { images } from "../rsrc";
import { linkSpec } from "./navigation";
import profilePic from "../assets/profilePicture.png"

export interface profileSpec {
    image: string;
    name: string;
    job: string;
    intro: string;
    contact: linkSpec;
}

export const profileData = {
    image: profilePic,
    name: "Belinda Pacocha",
    job: "Chief Executive Office",
    intro: "Alias et commodi repellat. Nostrum autem ut molestias accusamus iure. ",
    contact: {
        text: "linkedin",
        url: "google.com",
        icon: images.LinkedinLogo,
        iconOnly: true
    }
}

export interface squadSpec {
    title: string;
    profiles: profileSpec[];
    perRow: number;
}

export const squadData = {
    title: "The Squad",
    profiles: [
        profileData,
        profileData, 
        profileData, 
        profileData, 
        profileData, 
        profileData, 
        profileData, 
        profileData, 
    ],
    perRow: 4
}



