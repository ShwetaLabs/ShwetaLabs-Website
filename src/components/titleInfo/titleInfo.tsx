import { titleInfoSpec } from '../../data/utils';
import { isDesktop } from '../../utils';

interface titleInfoProp {
  titleInfo: titleInfoSpec;
}

export default function TitleInfo({ titleInfo }: titleInfoProp): JSX.Element {
  return isDesktop() ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <p
        className='title fs-xx-large'
        style={{ textAlign: 'start', width: '50%' }}
      >
        {titleInfo.title}
      </p>
      <div style={{ width: '50%', whiteSpace: 'pre-wrap', textAlign: 'left' }}>
        <p className='shady-70'>{titleInfo.paras}</p>
      </div>
    </div>
  ) : (
    <div>
      <p className='title fs-xx-large' style={{ textAlign: 'start' }}>
        {titleInfo.title}
      </p>
      <div style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>
        <p className='shady-70'>{titleInfo.paras}</p>
      </div>
    </div>
  );
}
