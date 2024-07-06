import { LinkBox } from "../components/linkBox/LinkBox";
import { briefAdvertData } from "../data/home";

export const Home:({})=>JSX.Element = ({})=>{
    return <div className="col" style={{alignItems:'stretch',width:'80%',marginInline:'auto'}}>
        <BriefAdvert/>
        <TrustedPartners/>
        <WhatWeHave/>
        <OurProducts/>
        <Awards/>
        <CaseStudies/>
        <PodcastAdvert/>
        <BlogsAdvert/>
        <Strongholds/>
    </div>
}


function BriefAdvert():JSX.Element{
    return <div className="col" style={{alignItems:'center'}}>
        <p className="title">{briefAdvertData.title}</p>
        <p>{briefAdvertData.description}</p>
        <LinkBox link={briefAdvertData.contactLink} aClassName={"button2"}/>
    </div>;
}
function TrustedPartners():JSX.Element{
    return <div></div>;
}
function WhatWeHave():JSX.Element{
    return <div></div>;
}
function OurProducts():JSX.Element{
    return <div></div>;
}
function Awards():JSX.Element{
    return <div></div>;
}
function CaseStudies():JSX.Element{
    return <div></div>;
}
function PodcastAdvert():JSX.Element{
    return <div></div>;
}
function BlogsAdvert():JSX.Element{
    return <div></div>;
}
function Strongholds():JSX.Element{
    return <div></div>;
}

