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
          paddingInline: '12.5vw',
          paddingTop: '6vw',
          paddingBottom: '3.94vw',
          justifyContent: 'space-between',
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
          <p className='shady-70 fs-smaller'>{footerData.quickLinksTitle}</p>
          {footerData.quickLinks.map(link => {
            return (
              <LinkBox
                key={link.text}
                link={link}
                aClassName='footerLink hoverColor fs-smaller'
              />
            );
          })}
        </div>
        <div
          className='col'
          key={footerData.policyLinksTitle}
          style={{ alignItems: 'flex-start' }}
        >
          <p className='shady-70 fs-smaller'>{footerData.policyLinksTitle}</p>
          {footerData.policyLinks.map(link => {
            return (
              <LinkBox
                link={link}
                aClassName='footerLink hoverColor fs-smaller'
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
          <p className='shady-70 fs-smaller'>{footerData.addressTitle}</p>
          {footerData.businessDetails.map((value, index) => (
            <div
              className={`row ${
                value.tag === 'phone' ? 'phone-footer-text' : ''
              }`}
              key={index}
              style={{ alignItems: 'center', rowGap: '0.45vw' }}
            >
              <img src={value.icon} style={{ paddingRight: 10 }} alt='icon' />
              <p
                className={`stripped fs-smaller ${
                  value.tag === 'address' ? 'address-footer-text' : ''
                }`}
                dangerouslySetInnerHTML={{ __html: value.text }}
              />
            </div>
          ))}

          {<SocialLinks />}
        </div>
      </div>
      <p
        className='fs-smaller'
        style={{ textAlign: 'center', marginBlock: '2.4vw' }}
      >
        {footerData.copyrightText}
      </p>
    </div>
  ) : (
    /*Mobile */
    <div className='col' style={{ ...outerDivStyle, display: getDisplay() }}>
      <div
        className='col thin-bordered'
        style={{
          padding: '20px',
          justifyContent: 'space-between',
          borderInline: 0,
        }}
      >
        <div
          className='row'
          key={footerData.logo}
          style={{
            justifyContent: 'center',
            width: '100%',
            marginBottom: 82,
          }}
        >
          <img src={footerData.logo} />
        </div>
        <div
          className='row'
          style={{
            justifyContent: 'space-between',
            marginBottom: 48,
            marginInline: '15vw',
          }}
        >
          <div
            className='col'
            key={footerData.quickLinksTitle}
            style={{ alignItems: 'flex-start' }}
          >
            <p className='shady-70 fs-smaller'>{footerData.quickLinksTitle}</p>
            {footerData.quickLinks.map(link => {
              return (
                <LinkBox
                  link={link}
                  aClassName='footerLink hoverColor fs-smaller'
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
            <p className='shady-70 fs-smaller'>{footerData.policyLinksTitle}</p>
            {footerData.policyLinks.map(link => {
              return (
                <LinkBox
                  link={link}
                  aClassName='footerLink hoverColor fs-smaller'
                  key={link.text}
                />
              );
            })}
          </div>
        </div>
        <div
          className='col'
          key={footerData.addressTitle}
          style={{
            alignItems: 'flex-start',
            rowGap: '0.45vw',
            marginInline: '15vw',
          }}
        >
          <p className='shady-70 fs-smaller'>{footerData.addressTitle}</p>
          {footerData.businessDetails.map((value, index) => (
            <div
              className={`row ${
                value.tag === 'phone' ? 'phone-footer-text' : ''
              }`}
              key={index}
              style={{ alignItems: 'center', rowGap: '0.45vw' }}
            >
              <img src={value.icon} style={{ paddingRight: 10 }} alt='icon' />
              <p
                className={`stripped fs-smaller ${
                  value.tag === 'address' ? 'address-footer-text' : ''
                }`}
                dangerouslySetInnerHTML={{ __html: value.text }}
              />
            </div>
          ))}
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
    <div className='row' style={{ marginTop: '1.96vw',marginLeft:"-10px", display: "flex", gap: "1rem" }}>
      {footerData.socialLinks.map(link => {
        return (
          <span className="social-link-wrapper" key={link.url}>
            <LinkBox
              link={link}
              aClassName='social-icon-link'
              target={'_blank'}
            />
          </span>
        );
      })}
    </div>
  );
}
