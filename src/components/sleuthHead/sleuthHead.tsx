import { sleuthHeadSpec } from '../../data/product';

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
        <div style={{ fontSize: '80px' }}>{sleuthHead.title}</div>
      </div>
      <div style={{ paddingLeft: '96px', paddingRight: '96px' }}>
        <div style={{ paddingBottom: '32px' }}>{sleuthHead.paras}</div>
        <div>
          <a className='button2' href='#'>
            {sleuthHead.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}
