import { features } from "process";
import { LinkBox } from "../components/linkBox/LinkBox";
import {
  advertData,
  caseStudiesData,
  featureSpec,
  ourProductsData,
  testimonySpec,
  trustedPartnersData,
  userSpec,
  whatWeHaveData,
} from "../data/home";
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
interface IFeatureProps {
  feature: featureSpec;
  reverse: boolean;
}
function Feature({ feature, reverse }: IFeatureProps): JSX.Element {
  return (
    <div
      className={reverse ? "rrow" : "row"}
      style={{ alignItems: "center", margin: 25, marginInline: "auto" }}
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginInline: 16,
          flexGrow:1
        }}
      >
        <img src={feature.image} style={{ width: "60%" }} />
      </div>
      {<FeatureTextData title={feature.title} description={feature.description} learnMoreUrl={feature.learnMoreUrl} />}
    </div>
  );
}
interface IFeatureTextDataProps{
  title:string;
  description:string;
  learnMoreUrl?:string;
}
function FeatureTextData({title,description,learnMoreUrl}:IFeatureTextDataProps) {
  return <div
    className="col bg2"
    style={{
      width: "50%",
      padding: 40,
      paddingInline: 52,
      marginInline: 16,
    }}
  >
    <p className="subtitle">{title}</p>
    <p className="offwhite fs-small">{description}</p>
    {learnMoreUrl ? (
      <div className="row">
        <LinkBox
          link={{ url: learnMoreUrl, text: whatWeHaveData.learnMore }}
          aClassName="button-pill" />
      </div>
    ) : null}
  </div>;
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
interface IProductProps{
  product:featureSpec
}
function Product({product}:IProductProps):JSX.Element{
  return <div className="row bg2 thin-bordered" style={{alignItems:"stretch"}}>
    <div className="row" style={{flexGrow:1,alignItems:'center'}}>
      <img src={product.image}/>
    </div>
    {/* todo: single line between image and textdata */}
    <FeatureTextData title={product.title} description={product.description} learnMoreUrl={product.learnMoreUrl}/>
  </div>
}
function Awards(): JSX.Element {
  return <div></div>;
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
interface ITestimonyProps{
  testimony:testimonySpec;
}
function Testimony({testimony}:ITestimonyProps):JSX.Element{
  return <div className="col bg2" style={{margin:16,padding:0}}>
    <div className="col" style={{borderBottom:'var(--accent) 0.5px solid',padding:40,paddingBottom:24}}>
      <div className="row" style={{alignItems:'flex-start'}}>
        <img src={testimony.quoteImage}/>
      </div>
      <div>
        <p className="offwhite fs-small">{testimony.description}</p>
      </div>
    </div>
    <UserBox user={testimony.user}/>
  </div>
}
interface IUserBoxProps{
  user:userSpec;
}
function UserBox({user}:IUserBoxProps):JSX.Element{
  return <div className="row" style={{alignItems:'center',padding:24,paddingInline:40}}>
    <img className="profile" src={user.image}/>
    <div className="col">
      <p className="stripped">{user.name}</p>
      <p className="stripped offwhite fs-smaller">{user.designation}</p>
    </div>
  </div>
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
