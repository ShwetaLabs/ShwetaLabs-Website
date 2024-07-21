import { titleInfoSpec } from '../../data/utils';

interface titleInfoProp {
  titleInfo: titleInfoSpec;
  onSide: boolean;
}

export default function TitleInfo({
  titleInfo,
  onSide,
}: titleInfoProp): JSX.Element {
  return onSide ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <div
        className='title fs-xx-large'
        style={{ textAlign: 'start', width: '50%' }}
      >
        {titleInfo.title}
      </div>
      <div style={{ width: '50%', whiteSpace: 'pre-wrap', textAlign: 'left' }}>
        <p className='shady-70'>{titleInfo.paras}</p>
      </div>
    </div>
  ) : (
    <div>
      {titleInfo.title}
      {titleInfo.paras}
    </div>
  );
}
