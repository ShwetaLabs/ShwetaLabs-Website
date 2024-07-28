import { ComingSoon } from '../components/misc';
import { blogData } from '../data/blog';
import { isDesktop } from '../utils';

export function Blog(): JSX.Element {
  return isDesktop() ? (
    <div
      className='col'
      style={{ width: '80vw', marginInline: 'auto', alignItems: 'center' }}
    >
      <p className='title2 fs-x-large'>{blogData.title}</p>
      <p
        className='shady-70 centered'
        style={{ marginTop: '2.4vw', width: '90%' }}
      >
        {blogData.description}
      </p>
      <div className='row' style={{ justifyContent: 'center' }}>
        <ComingSoon />
      </div>
    </div>
  ) : (
    <div style={{ width: '90vw', marginInline: 'auto' }}>
      <p className='title2 fs-x-large'>{blogData.title}</p>
      <p className='shady-70 centered' style={{ marginTop: '2.4vw' }}>
        {blogData.description}
      </p>
      <span
        className='row'
        style={{ justifyContent: 'center', paddingTop: '5vh' }}
      >
        <ComingSoon />
      </span>
    </div>
  );
}
