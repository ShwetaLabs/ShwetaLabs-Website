import { CSSProperties } from 'react';
import { footerData } from '../../data/footer';
import { LinkBox } from '../linkBox/LinkBox';
import { isDesktop } from '../../utils';
const outerDivStyle: CSSProperties = {
  display: 'block',
  position: 'relative',
  bottom: 0,
  right: 0,
  left: 0,
};
export function Footer({ getDisplay }: any): JSX.Element {
  return isDesktop() ? (
    <div className='col' style={{ ...outerDivStyle, display: getDisplay() }}>
      <div
        className='row thin-bordered'
        style={{
          padding: '20px',
          justifyContent: 'space-around',
          borderInline: 0,
        }}
      >
        <div
          className='col'
          key={footerData.logo}
          style={{ justifyContent: 'space-around' }}
        >
          {/* get better res. logo */}
          <img src={footerData.logo} />
        </div>
        <div
          className='col'
          key={footerData.quickLinksTitle}
          style={{ alignItems: 'flex-start' }}
        >
          <p className='shady-70'>{footerData.quickLinksTitle}</p>
          {footerData.quickLinks.map(link => {
            return (
              <LinkBox
                link={link}
                aClassName='footerLink fs-smaller'
                key={link.text}
              />
            );
          })}
        </div>
        <div
          className='col'
          key={footerData.policyLinksTitle}
          style={{ alignItems: 'flex-start' }}
        >
          <p className='shady-70'>{footerData.policyLinksTitle}</p>
          {footerData.policyLinks.map(link => {
            return (
              <LinkBox
                link={link}
                aClassName='footerLink fs-smaller'
                key={link.text}
              />
            );
          })}
        </div>
        <div
          className='col'
          key={footerData.addressTitle}
          style={{ alignItems: 'flex-start' }}
        >
          <p className='shady-70'>{footerData.addressTitle}</p>
          {
            <p className='stripped' key={footerData.address}>
              {footerData.address}
            </p>
          }
          {footerData.businessDetails.map(value => {
            return (
              <p className='stripped' key={value}>
                {value}
              </p>
            );
          })}
          {<SocialLinks />}
        </div>
      </div>
      <p className='fs-smaller' style={{ textAlign: 'center' }}>
        {footerData.copyrightText}
      </p>
    </div>
  ) : (
    <div className='col' style={{ ...outerDivStyle, display: getDisplay() }}>
      <div
        className='col thin-bordered'
        style={{
          padding: '20px',
          justifyContent: 'space-around',
          borderInline: 0,
        }}
      >
        <div
          className='col'
          key={footerData.logo}
          style={{
            justifyContent: 'space-around',
            width: '70%',
            marginBottom: 82,
          }}
        >
          <img src={footerData.logo} />
        </div>
        <div
          className='row'
          style={{ justifyContent: 'space-between', marginBottom: 48 }}
        >
          <div
            className='col'
            key={footerData.quickLinksTitle}
            style={{ alignItems: 'flex-start' }}
          >
            <p className='shady-70'>{footerData.quickLinksTitle}</p>
            {footerData.quickLinks.map(link => {
              return (
                <LinkBox
                  link={link}
                  aClassName='footerLink fs-smaller'
                  key={link.text}
                />
              );
            })}
          </div>
          <div
            className='col'
            key={footerData.policyLinksTitle}
            style={{ alignItems: 'flex-start' }}
          >
            <p className='shady-70'>{footerData.policyLinksTitle}</p>
            {footerData.policyLinks.map(link => {
              return (
                <LinkBox
                  link={link}
                  aClassName='footerLink fs-smaller'
                  key={link.text}
                />
              );
            })}
          </div>
        </div>
        <div
          className='col'
          key={footerData.addressTitle}
          style={{ alignItems: 'flex-start' }}
        >
          <p className='shady-70'>{footerData.addressTitle}</p>
          {
            <p className='stripped' key={footerData.address}>
              {footerData.address}
            </p>
          }
          {footerData.businessDetails.map(value => {
            return (
              <p className='stripped' key={value}>
                {value}
              </p>
            );
          })}
        </div>
        <div
          className='row'
          style={{
            marginTop: 48,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {<SocialLinks />}
        </div>
      </div>
      <p className='fs-smaller' style={{ textAlign: 'center' }}>
        {footerData.copyrightText}
      </p>
    </div>
  );
}
export function SocialLinks() {
  return (
    <div className='row' style={{ marginTop: 48 }}>
      {footerData.socialLinks.map(link => {
        return (
          <span style={{ marginInline: '12.5px' }}>
            <LinkBox link={link} aClassName='button fs-large' key={link.url} />
          </span>
        );
      })}
    </div>
  );
}
