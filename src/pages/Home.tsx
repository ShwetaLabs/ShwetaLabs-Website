import { LinkBox } from "../components/linkBox/LinkBox";
import { advertData, trustedPartnersData } from "../data/home";
import { contactLink } from "../data/navigation";

export const Home: ({}) => JSX.Element = ({}) => {
  return (
    <div
      className="col home"
      style={{ alignItems: "stretch", width: "78%", marginInline: "auto" }}
    >
      <BriefAdvert />
      <TrustedPartners />
      <WhatWeHave />
      <OurProducts />
      <Awards />
      <CaseStudies />
      <PodcastAdvert />
      <BlogsAdvert />
      <Strongholds />
    </div>
  );
};

function BriefAdvert(): JSX.Element {
  return (
    <div className="col" style={{ alignItems: "center", width:'80%',marginInline:'auto' }}>
        <p style={{width:'75%'}} className="title">{advertData.title}</p>
        <p className="shady-70" style={{textAlign:'center'}}>{advertData.description}</p>
        <LinkBox link={contactLink} aClassName={"button2"} />
      <div
        className="row"
        style={{
          width: "80%",
          marginTop: 140,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div>
          <p className="shady-70" style={{ textAlign: "left", width: "500px" }}>
            {advertData.descriptionBesideLogo}
          </p>
        </div>
        <div>
          <img src={advertData.logo} />
        </div>
      </div>
    </div>
  );
}
function TrustedPartners(): JSX.Element {
  return <div className="row bg2" style={{width:'80%'}}>
    <div className="col" style={{marginLeft:'52px',width:'55%'}}>
      <p className="title" style={{textAlign:'left'}}>
        {trustedPartnersData.title}
      </p>
      <p className="description" style={{width:'70%'}}>
        {trustedPartnersData.description}
      </p>
    </div>
    <div className="grid d3xn" style={{columnGap:'16%'}}>
      {
        trustedPartnersData.logos.map((logo)=>{
          return <img src={logo} key={logo}/>
        })
      }
    </div>
  </div>;
}
function WhatWeHave(): JSX.Element {
  return <div></div>;
}
function OurProducts(): JSX.Element {
  return <div></div>;
}
function Awards(): JSX.Element {
  return <div></div>;
}
function CaseStudies(): JSX.Element {
  return <div></div>;
}
function PodcastAdvert(): JSX.Element {
  return <div></div>;
}
function BlogsAdvert(): JSX.Element {
  return <div></div>;
}
function Strongholds(): JSX.Element {
  return <div></div>;
}
