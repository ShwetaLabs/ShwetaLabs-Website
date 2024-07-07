import { features } from "process";
import { LinkBox } from "../components/linkBox/LinkBox";
import {
  advertData,
  awardsData,
  blogsAdvertData,
  caseStudiesData,
  featureSpec,
  ourProductsData,
  podcastAdvertData,
  testimonySpec,
  trustedPartnersData,
  userSpec,
  whatWeHaveData,
} from "../data/home";
import { contactLink } from "../data/navigation";
import { AwardTile, BlogTile, Feature, PodcastEpisodeTile, Product, Testimony } from "../components/misc";

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
    <div
      className="col"
      style={{ alignItems: "center", width: "80%", marginInline: "auto" }}
    >
      <p style={{ width: "75%" }} className="title">
        {advertData.title}
      </p>
      <p className="shady-70" style={{ textAlign: "center" }}>
        {advertData.description}
      </p>
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
  return (
    <div className="row bg2" style={{ width: "80%" }}>
      <div className="col" style={{ marginLeft: "52px", width: "55%" }}>
        <p className="title" style={{ textAlign: "left" }}>
          {trustedPartnersData.title}
        </p>
        <p className="description" style={{ width: "70%" }}>
          {trustedPartnersData.description}
        </p>
      </div>
      <div className="grid d3xn" style={{ columnGap: "16%" }}>
        {trustedPartnersData.logos.map((logo) => {
          return <img src={logo} key={logo} />;
        })}
      </div>
    </div>
  );
}
function WhatWeHave(): JSX.Element {
  return (
    <div className="col" style={{ width: "80%" }}>
      <p className="title">{whatWeHaveData.title}</p>
      {whatWeHaveData.features.map((feature, index, arr) => {
        return <Feature feature={feature} reverse={index % 2 === 1} key={feature.title}/>;
      })}
    </div>
  );
}

function OurProducts(): JSX.Element {
  return <div className="col" style={{width:'80%'}}>
    <p className="title">{ourProductsData.title}</p>
    {
      ourProductsData.products.map((product)=>{
        return <Product product={product} key={product.title}/>;
      })
    }
  </div>;
}

function Awards(): JSX.Element {
  return <div style={{width:'80%'}}>
    <p className="title" style={{width:'90%'}}>
      {awardsData.title}
    </p>
    <p className="offwhite fs-small centered" style={{width:'85%'}}>
      {awardsData.description}
    </p>
    <div className="row" style={{justifyContent:'center'}}>
      {
        awardsData.awards.map((award)=>{
          return <AwardTile award={award} key={award.title}/>
        })
      }
    </div>
  </div>;
}
function CaseStudies(): JSX.Element {
  return <div className="col" style={{width:'80%',alignContent:'flex-start'}}>
    <p className="title" style={{textAlign:'left'}}>{caseStudiesData.title}</p>
    <p className="offwhite" style={{width:'90%'}}>{caseStudiesData.description}</p>
    <div className="row">
      {
        caseStudiesData.cases.map((testimony)=>{
          return <Testimony testimony={testimony}/>
        })
      }
    </div>
  </div>;
}

function PodcastAdvert(): JSX.Element {
  return <div className="col" style={{width:'80%',alignItems:'center'}}>
    <p className="title" style={{width:'80%'}}>{podcastAdvertData.title}</p>
    <div className="row" style={{justifyContent:'center'}}>
      {
        podcastAdvertData.episodes.map((episode)=>{
          return <PodcastEpisodeTile episode={episode} key={episode.title}/>
        })
      }
    </div>
  </div>;
}
function BlogsAdvert(): JSX.Element {
  return <div className="col" style={{width:'80%',alignItems:'center'}}>
    <p className="title" style={{marginBottom:48}}>{blogsAdvertData.title}</p>
    <div className="row">
      {
        blogsAdvertData.blogs.map((blog)=>{
          return <BlogTile blog={blog} key={blog.title}/>
        })
      }
    </div>

  </div>;
}
function Strongholds(): JSX.Element {
  return <div></div>;
}
