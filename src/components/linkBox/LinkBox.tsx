import { Link } from 'react-router-dom';
import { linkSpec } from '../../data/navigation';

export interface ILinkBoxProps {
  link: linkSpec;
  aClassName?: string;
  target?: string;
}
export function LinkBox({
  link,
  aClassName,
  target,
}: ILinkBoxProps): JSX.Element {
  // should take a linkSpec
  // and render it
  // should make use of iconOnly option
  return (
    <Link
      to={link.url}
      className={aClassName || ''}
      style={{ verticalAlign: 'middle', lineHeight: 0 }}
      target={target}
    >
      {link.icon ? <img src={link.icon} /> : null}
      {!link.iconOnly ? <>{link.text}</> : null}
    </Link>
  );
}
