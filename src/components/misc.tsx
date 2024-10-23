import {
  awardSpec,
  blogsAdvertData,
  blogSpec,
  featureSpec,
  podcastEpisodeSpec,
  testimonySpec,
  userSpec,
  whatWeHaveData,
} from '../data/home';
import { comingSoonData } from '../data/podcast';
import { icons } from '../rsrc';
import { isDesktop } from '../utils';
import { LinkBox } from './linkBox/LinkBox';
import { motion } from 'framer-motion';

export interface IFeatureProps {
  feature: featureSpec;
  reverse: boolean;
}

// Define the animation for the feature text data
const featureVariants = (reverse: boolean) => ({
  hidden: {
    opacity: 0,
    x: reverse ? 100 : -100, // Slide from right if reverse, otherwise from left
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 15,
    },
  },
});

export function Feature({ feature, reverse }: IFeatureProps): JSX.Element {
  return isDesktop() ? (
    <div
      className={reverse ? 'rrow' : 'row'}
      style={{ alignItems: 'center', margin: 25, marginInline: 'auto' }}
    >
      <div
        className='row'
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginInline: 16,
          flexGrow: 1,
          width: '25%',
        }}
      >
        <img src={feature.image} style={{ maxWidth: '40%' }} />
      </div>

      {/* Animate FeatureTextData using framer-motion, and trigger only when in view */}
      <motion.div
        variants={featureVariants(reverse)}
        initial='hidden'
        whileInView='show' // Trigger animation when the component comes into view
        viewport={{ once: true, amount: 0.3 }} // 0.3 means 30% of the component should be in view to trigger animation
        // style={{ flexGrow: 1, width: '50%' }} // Adjust the layout as needed
        className='col bg2'
        style={{
          width: '50%',
          paddingBlock: 40,
          paddingInline: 52,
          marginInline: 16,
          flexGrow: 1,
        }}
      >
        <FeatureTextData
          title={feature.title}
          description={feature.description}
          learnMoreUrl={feature.learnMoreUrl}
        />
      </motion.div>
    </div>
  ) : (
    <div className='col' style={{ alignItems: 'center' }}>
      <div
        className='row'
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
          paddingBlock: 30,
        }}
      >
        <img src={feature.image} style={{ width: '60%' }} />
      </div>

      {/* Animate FeatureTextData for mobile view */}
      <motion.div
        variants={featureVariants(false)} // No reverse for mobile; you can customize as needed
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the component is visible
        className='col bg2'
        style={{ padding: 24, marginBottom: 45 }}
      >
        <FeatureTextData
          title={feature.title}
          description={feature.description}
          learnMoreUrl={feature.learnMoreUrl}
        />
      </motion.div>
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
  return isDesktop() ? (
    <div>
      <p className='fs-large subtitle fw-bold' style={{ textAlign: 'left' }}>
        {title}
      </p>
      <p className='offwhite'>{description}</p>
      {learnMoreUrl ? (
        <div className='row'>
          <LinkBox
            link={{ url: learnMoreUrl, text: whatWeHaveData.learnMore }}
            aClassName='button-pill fs-smaller caret-right'
          />
        </div>
      ) : null}
    </div>
  ) : (
    <div>
      <p className='fs-larger subtitle'>{title}</p>
      <p className='offwhite fw-bold'>{description}</p>
      {learnMoreUrl ? (
        <div className='row'>
          <LinkBox
            link={{ url: learnMoreUrl, text: whatWeHaveData.learnMore }}
            aClassName='button-pill fs-smaller caret-right'
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
  return isDesktop() ? (
    <div
      className='row bg2 thin-bordered'
      style={{ alignItems: 'center', justifyContent: 'space-between' }}
    >
      <div
        className='row'
        style={{ alignItems: 'center', width: '50%', paddingInline: 40 }}
      >
        <img style={{ width: '100%' }} src={product.image} />
      </div>
      <div
        className='row'
        style={{
          borderLeft: '0.5px var(--accent) solid',
          flexGrow: 1,
        }}
      >
        <FeatureTextData
          title={product.title}
          description={product.description}
          learnMoreUrl={product.learnMoreUrl}
        />
      </div>
    </div>
  ) : (
    <div className='col bg2 thin-bordered'>
      <div
        className='row'
        style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <img style={{ width: '70%' }} src={product.image} />
      </div>
      {/* todo: single line between image and textdata */}
      <div
        className='col bg2'
        style={{ padding: 20, borderTop: 'var(--accent) 0.5px solid' }}
      >
        <p className='fs-larger subtitle'>{product.title}</p>
        <p className='offwhite fw-bold'>{product.description}</p>
        {product.learnMoreUrl ? (
          <div className='row' style={{ justifyContent: 'flex-start' }}>
            <LinkBox
              link={{ url: product.learnMoreUrl, text: 'Learn More' }}
              aClassName='button-pill fs-smaller caret-right'
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export interface ITestimonyProps {
  testimony: testimonySpec;
}
export function Testimony({ testimony }: ITestimonyProps): JSX.Element {
  return (
    <div className='col bg2' style={{ margin: 16, padding: 0 }}>
      <div
        className='col'
        style={{
          borderBottom: 'var(--accent) 0.5px solid',
          padding: 40,
          paddingBottom: 24,
        }}
      >
        <div className='row' style={{ alignItems: 'flex-start' }}>
          <img src={testimony.quoteImage} />
        </div>
        <div>
          <p className='offwhite fs-smaller'>{testimony.description}</p>
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
      className='row'
      style={{ alignItems: 'center', padding: 24, paddingInline: 40 }}
    >
      <img className='profile' src={user.image} />
      <div className='col'>
        <p className='stripped'>{user.name}</p>
        <p className='stripped offwhite fs-smaller'>{user.designation}</p>
      </div>
    </div>
  );
}

export interface IBlogProps {
  blog: blogSpec;
}

export function BlogTile({ blog }: IBlogProps): JSX.Element {
  return isDesktop() ? (
    <div className='col' style={{ marginInline: 16 }}>
      <div className='blogtile'>
        <img src={blog.image} />
      </div>
      <div
        className='row'
        style={{ justifyContent: 'space-between', marginTop: 24 }}
      >
        <p className='offwhite fs-smaller stripped'>{blog.date}</p>
        <p className='offwhite fs-smaller stripped clocked'>{blog.length}</p>
      </div>
      <div className='col' style={{ alignItems: 'flex-start' }}>
        <p className='stripped' style={{ marginBottom: 12 }}>
          {blog.title}
        </p>
        <LinkBox
          link={{ text: blogsAdvertData.readArticle, url: blog.url }}
          aClassName='caret-right button-pill fs-smaller'
        />
      </div>
    </div>
  ) : (
    <div className='col' style={{ marginTop: 32 }}>
      <div className='blogtile row' style={{ justifyContent: 'center' }}>
        <img src={blog.image} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
      <div
        className='row'
        style={{ justifyContent: 'space-between', marginTop: 24 }}
      >
        <p className='offwhite fs-smaller stripped'>{blog.date}</p>
        <p className='offwhite fs-smaller stripped clocked'>{blog.length}</p>
      </div>
      <div className='col' style={{ alignItems: 'flex-start' }}>
        <p className='stripped' style={{ marginBottom: 12 }}>
          {blog.title}
        </p>
        <LinkBox
          link={{ text: blogsAdvertData.readArticle, url: blog.url }}
          aClassName='caret-right button-pill fs-smaller'
        />
      </div>
    </div>
  );
}
export interface IAwardTileProps {
  award: awardSpec;
}
export function AwardTile({ award }: IAwardTileProps): JSX.Element {
  return isDesktop() ? (
    <div className='col bg2' style={{ margin: 16 }}>
      <div style={{ padding: 40, paddingInline: 52, paddingBottom: 24 }}>
        <img src={award.logo} />
      </div>
      <div
        className='col'
        style={{
          padding: 24,
          paddingInline: 40,
          alignItems: 'center',
          borderTop: 'var(--accent) 0.5px solid',
        }}
      >
        <p className='stripped'>{award.title}</p>
        <p className='fs-smaller stripped offwhite'>{award.category}</p>
      </div>
    </div>
  ) : (
    <div className='bg2'>
      <div
        style={{
          padding: 40,
          paddingBottom: 24,
          paddingInline: '17%',
        }}
      >
        <img style={{ width: '100%' }} src={award.logo} />
      </div>
      <div
        className='col'
        style={{
          paddingBlock: 24,
          alignItems: 'center',
          borderTop: 'var(--accent) 0.5px solid',
        }}
      >
        <p className='stripped'>{award.title}</p>
        <p className='fs-smaller stripped offwhite'>{award.category}</p>
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
  return isDesktop() ? (
    <div className='col thin-bordered' style={{ margin: 16 }}>
      <div className='episodetile' style={{ position: 'relative' }}>
        <img
          src={episode.thumbnail}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 0 }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className='row'
        >
          <img
            className='pointable'
            onClick={() => (window.location = episode.link as any)}
            src={icons.playButton}
            style={{}}
          />
        </div>
        <div
          className='row'
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          <div
            className='row gradient-shade'
            style={{
              justifyContent: 'space-between',
              width: '100%',
              padding: 24,
            }}
          >
            <p className='fs-smaller stripped'>{episode.date}</p>
            <p className='fs-smaller stripped clocked'>{episode.length}</p>
          </div>
        </div>
      </div>
      <div className='col bg2' style={{ padding: 24 }}>
        <p
          className='stripped'
          style={{ textTransform: 'uppercase', paddingBottom: 12 }}
        >
          {episode.episode}
        </p>
        <p className='stripped'>{episode.title}</p>
      </div>
    </div>
  ) : (
    <div className='col thin-bordered' style={{ margin: 16 }}>
      <div className='episodetile' style={{ position: 'relative' }}>
        <img
          src={episode.thumbnail}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 0,
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className='row'
        >
          <img
            className='pointable'
            onClick={() => (window.location = episode.link as any)}
            src={icons.playButton}
            style={{}}
          />
        </div>
        <div
          className='row'
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          <div
            className='row gradient-shade'
            style={{
              justifyContent: 'space-between',
              width: '100%',
              padding: 24,
            }}
          >
            <p className='fs-smaller stripped'>{episode.date}</p>
            <p className='fs-smaller stripped clocked'>{episode.length}</p>
          </div>
        </div>
      </div>
      <div className='col bg2' style={{ padding: 24 }}>
        <p
          className='stripped'
          style={{ textTransform: 'uppercase', paddingBottom: 12 }}
        >
          {episode.episode}
        </p>
        <p className='stripped'>{episode.title}</p>
      </div>
    </div>
  );
}

export function ComingSoon() {
  return (
    <div
      className='title fs-larger'
      style={{ margin: '2vw', borderRadius: '5px' }}
    >
      {comingSoonData.text}
    </div>
  );
}
