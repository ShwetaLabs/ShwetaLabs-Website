import { Link } from 'react-router-dom';
import { headerData } from '../../data/header';
import { linkSpec } from '../../data/navigation';
import { LinkBox } from '../linkBox/LinkBox';

export const Header: ({}) => JSX.Element = ({}) => {
  return (
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
          return <HeaderButton link={link} key={link.text} />;
        })}
      </div>
      <div>
        <LinkBox link={headerData.requestDemoLink} aClassName='button2' />
      </div>
    </div>
  );
};
interface HeaderButtonSpec {
  link: linkSpec;
}
export function HeaderButton({ link }: HeaderButtonSpec): JSX.Element {
  return (
    <div style={{ textTransform: 'uppercase', marginInline: '10px' }}>
      <LinkBox link={link} aClassName='button' />
    </div>
  );
}
