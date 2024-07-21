import { sleuthHeadSpec } from '../../data/product';
import { LinkBox } from '../linkBox/LinkBox';

interface SleuthHeadProp {
  sleuthHead: sleuthHeadSpec;
}

export default function SleuthHead({ sleuthHead }: SleuthHeadProp) {
  return (
    <>
      <div
        style={{
          paddingLeft: '96px',
          paddingRight: '96px',
          marginBottom: '32px',
        }}
      >
        <img src={sleuthHead.img} alt='Sleuth' />
      </div>
      <div style={{ paddingLeft: '96px', paddingRight: '96px' }}>
        <div style={{ paddingBottom: '32px' }}>
          <p className='shady-70 centered'>{sleuthHead.paras}</p>
        </div>
        <span className='fw-bold' style={{ textTransform: 'uppercase' }}>
          <LinkBox
            link={{ text: sleuthHead.buttonText, url: '/contact' }}
            aClassName='button4 caret-right'
          />
        </span>
      </div>
      <div
        style={{
          marginTop: '12.1vw',
          paddingLeft: '96px',
          paddingRight: '96px',
          marginBottom: '32px',
        }}
      >
        <div className='title2 fs-x-large'>{sleuthHead.title}</div>
      </div>
    </>
  );
}
