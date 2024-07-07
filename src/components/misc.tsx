import { featureSpec, testimonySpec, userSpec, whatWeHaveData } from "../data/home";
import { LinkBox } from "./linkBox/LinkBox";

export interface IFeatureProps {
  feature: featureSpec;
  reverse: boolean;
}
export function Feature({ feature, reverse }: IFeatureProps): JSX.Element {
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
          flexGrow: 1,
        }}
      >
        <img src={feature.image} style={{ width: "60%" }} />
      </div>
      {
        <FeatureTextData
          title={feature.title}
          description={feature.description}
          learnMoreUrl={feature.learnMoreUrl}
        />
      }
    </div>
  );
}
export interface IFeatureTextDataProps {
  title: string;
  description: string;
  learnMoreUrl?: string;
}
export function FeatureTextData({
  title,
  description,
  learnMoreUrl,
}: IFeatureTextDataProps) {
  return (
    <div
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
            aClassName="button-pill"
          />
        </div>
      ) : null}
    </div>
  );
}
export interface IProductProps{
  product:featureSpec
}
export function Product({product}:IProductProps):JSX.Element{
  return <div className="row bg2 thin-bordered" style={{alignItems:"stretch"}}>
    <div className="row" style={{flexGrow:1,alignItems:'center'}}>
      <img src={product.image}/>
    </div>
    {/* todo: single line between image and textdata */}
    <FeatureTextData title={product.title} description={product.description} learnMoreUrl={product.learnMoreUrl}/>
  </div>
}

export interface ITestimonyProps{
  testimony:testimonySpec;
}
export function Testimony({testimony}:ITestimonyProps):JSX.Element{
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
export interface IUserBoxProps{
  user:userSpec;
}
export function UserBox({user}:IUserBoxProps):JSX.Element{
  return <div className="row" style={{alignItems:'center',padding:24,paddingInline:40}}>
    <img className="profile" src={user.image}/>
    <div className="col">
      <p className="stripped">{user.name}</p>
      <p className="stripped offwhite fs-smaller">{user.designation}</p>
    </div>
  </div>
}