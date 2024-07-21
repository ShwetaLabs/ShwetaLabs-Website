import { ComingSoon } from '../components/misc';
import { podcastData } from '../data/podcast';

export function Podcast(): JSX.Element {
  return (
    <div style={{ width: '43.5vw', marginInline: 'auto' }}>
      <p className='title2 fs-x-large'>{podcastData.title}</p>
      <p className='shady-70 centered' style={{ marginTop: '2.4vw' }}>
        {podcastData.description}
      </p>
      <ComingSoon />
    </div>
  );
}
