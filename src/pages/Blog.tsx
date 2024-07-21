import { ComingSoon } from '../components/misc';
import { blogData } from '../data/blog';

export function Blog(): JSX.Element {
  return (
    <div
      className='col'
      style={{ width: '55vw', marginInline: 'auto', alignItems: 'center' }}
    >
      <p className='title2 fs-x-large'>{blogData.title}</p>
      <p
        className='shady-70 centered'
        style={{ width: '45vw', marginTop: '2.4vw' }}
      >
        {blogData.description}
      </p>
      <ComingSoon />
    </div>
  );
}
