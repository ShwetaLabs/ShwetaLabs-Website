import {
  awardSpec,
  blogsAdvertData,
  blogSpec,
  featureSpec,
  podcastEpisodeSpec,
  testimonySpec,
  userSpec,
  whatWeHaveData,
} from "../data/home";
import { icons } from "../rsrc";
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
            aClassName="button-pill caret-right"
          />
        </div>
      ) : null}
    </div>
  );
}
export interface IProductProps {
  product: featureSpec;
}
export function Product({ product }: IProductProps): JSX.Element {
  return (
    <div className="row bg2 thin-bordered" style={{ alignItems: "stretch" }}>
      <div className="row" style={{ flexGrow: 1, alignItems: "center" }}>
        <img src={product.image} />
      </div>
      {/* todo: single line between image and textdata */}
      <FeatureTextData
        title={product.title}
        description={product.description}
        learnMoreUrl={product.learnMoreUrl}
      />
    </div>
  );
}

export interface ITestimonyProps {
  testimony: testimonySpec;
}
export function Testimony({ testimony }: ITestimonyProps): JSX.Element {
  return (
    <div className="col bg2" style={{ margin: 16, padding: 0 }}>
      <div
        className="col"
        style={{
          borderBottom: "var(--accent) 0.5px solid",
          padding: 40,
          paddingBottom: 24,
        }}
      >
        <div className="row" style={{ alignItems: "flex-start" }}>
          <img src={testimony.quoteImage} />
        </div>
        <div>
          <p className="offwhite fs-small">{testimony.description}</p>
        </div>
      </div>
      <UserBox user={testimony.user} />
    </div>
  );
}
export interface IUserBoxProps {
  user: userSpec;
}
export function UserBox({ user }: IUserBoxProps): JSX.Element {
  return (
    <div
      className="row"
      style={{ alignItems: "center", padding: 24, paddingInline: 40 }}
    >
      <img className="profile" src={user.image} />
      <div className="col">
        <p className="stripped">{user.name}</p>
        <p className="stripped offwhite fs-smaller">{user.designation}</p>
      </div>
    </div>
  );
}

export interface IBlogProps {
  blog: blogSpec;
}

export function BlogTile({ blog }: IBlogProps): JSX.Element {
  return (
    <div className="col" style={{ marginInline: 16 }}>
      <div className="blogtile">
        <img src={blog.image} />
      </div>
      <div
        className="row"
        style={{ justifyContent: "space-between", marginTop: 24 }}
      >
        <p className="offwhite fs-smaller stripped">{blog.date}</p>
        <p className="offwhite fs-smaller stripped clocked">{blog.length}</p>
      </div>
      <div className="col" style={{ alignItems: "flex-start" }}>
        <p className="stripped" style={{ marginBottom: 12 }}>
          {blog.title}
        </p>
        <LinkBox
          link={{ text: blogsAdvertData.readArticle, url: blog.url }}
          aClassName="caret-right button-pill"
        />
      </div>
    </div>
  );
}
export interface IAwardTileProps {
  award: awardSpec;
}
export function AwardTile({ award }: IAwardTileProps): JSX.Element {
  return (
    <div className="col bg2" style={{ margin: 16 }}>
      <div style={{ padding: 40, paddingInline: 52, paddingBottom: 24 }}>
        <img src={award.logo} />
      </div>
      <div
        className="col"
        style={{
          padding: 24,
          paddingInline: 40,
          alignItems: "center",
          borderTop: "var(--accent) 0.5px solid",
        }}
      >
        <p className="fs-small stripped">{award.title}</p>
        <p className="fs-smaller stripped offwhite">{award.category}</p>
      </div>
    </div>
  );
}

export interface IPodcastEpisodeProps {
  episode: podcastEpisodeSpec;
}

export function PodcastEpisodeTile({
  episode,
}: IPodcastEpisodeProps): JSX.Element {
  return (
    <div className="col thin-bordered" style={{ margin: 16 }}>
      <div className="episodetile" style={{ position: "relative" }}>
        <img
          src={episode.thumbnail}
          style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 0 }}
        />
        <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,alignItems:'center',justifyContent:'center'}} className="row">
          <img className="pointable" onClick={()=>(window.location=(episode.link as any))} src={icons.playButton} style={{}}/>
        </div>
        <div
          className="row"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          <div
            className="row gradient-shade"
            style={{
              justifyContent: "space-between",
              width: "100%",
              padding: 24,
            }}
          >
            <p className="fs-small stripped">{episode.date}</p>
            <p className="fs-small stripped clocked">{episode.length}</p>
          </div>
        </div>
      </div>
      <div className="col bg2" style={{ padding: 24 }}>
        <p
          className="stripped"
          style={{ textTransform: "uppercase", paddingBottom: 12 }}
        >
          {episode.episode}
        </p>
        <p className="stripped">{episode.title}</p>
      </div>
    </div>
  );
}
