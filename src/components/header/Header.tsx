import { Link } from 'react-router-dom';
import { headerData } from '../../data/header';
import { linkSpec } from '../../data/navigation';
import { LinkBox } from '../linkBox/LinkBox';
import { isDesktop } from '../../utils';
import { icons } from '../../rsrc';
import { useState } from 'react';
interface IHeaderProps {
  navBarVisible: any;
  setNavBarVisible: any;
}
export const Header: (props: IHeaderProps) => JSX.Element = ({
  navBarVisible,
  setNavBarVisible,
}) => {
  const toggleNavBar = () => {
    setNavBarVisible((isVisible: boolean) => !isVisible);
  };
  return isDesktop() ? (
    <div
      className='row'
      style={{
        justifyContent: 'space-around',
        padding: '20px',
        borderBottom: 'grey 0.5px solid',
      }}
    >
      <Link to={headerData.logoLink.url}>
        <img src={headerData.logo} />
      </Link>
      <div className='row' style={{ justifyContent: 'space-between' }}>
        {headerData.navLinks.map(link => {
          return <HeaderButtonDesktop link={link} key={link.text} />;
        })}
      </div>
      <div>
        <LinkBox link={headerData.requestDemoLink} aClassName='button2' />
      </div>
    </div>
  ) : (
    <div className='col'>
      <div
        className='row'
        style={{
          justifyContent: 'space-between',
          padding: '20px',
          borderBottom: 'grey 0.5px solid',
        }}
      >
        <Link to={headerData.logoLink.url}>
          <img src={headerData.logo} />
        </Link>
        <img className='pointable' onClick={toggleNavBar} src={icons.List} />
      </div>
      {navBarVisible ? (
        <div
          className='col'
          style={{ alignItems: 'center', alignContent: 'stretch' }}
        >
          {headerData.navLinks.map(link => (
            <HeaderButtonMobile link={link} key={link.text} />
          ))}
          <LinkBox link={headerData.requestDemoLink} aClassName='button2' />
        </div>
      ) : null}
    </div>
  );
};
interface HeaderButtonDesktopSpec {
  link: linkSpec;
}
export function HeaderButtonDesktop({
  link,
}: HeaderButtonDesktopSpec): JSX.Element {
  return (
    <div
      style={{
        textTransform: 'uppercase',
        marginInline: '10px',
      }}
    >
      <LinkBox link={link} aClassName='button' />
    </div>
  );
}

export function HeaderButtonMobile({
  link,
}: HeaderButtonDesktopSpec): JSX.Element {
  return (
    <div
      style={{
        textTransform: 'uppercase',
        marginInline: 'auto',
        marginBlock: '25px',
      }}
    >
      <LinkBox link={link} aClassName='button' />
    </div>
  );
}
