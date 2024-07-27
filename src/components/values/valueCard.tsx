import { valueCardSpec } from '../../data/about';

interface valueCardProp {
  valueCard: valueCardSpec;
  onLeft: boolean;
}

export default function ValueCard({ valueCard, onLeft }: valueCardProp) {
  return onLeft ? (
    <div
      style={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
    >
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '37%', padding: '50px' }}>
          <img
            style={{ objectFit: 'cover' }}
            src={valueCard.image}
            alt={valueCard.title}
          />
        </div>
        <div style={{ width: '63%', marginTop: '16px', marginRight: '40px' }}>
          <div style={{ marginBottom: '16px' }}>
            <span className='fs-large' style={{ marginBottom: '16px' }}>
              {' '}
              {valueCard.title}{' '}
            </span>
          </div>
          <div
            className='fs-smaller'
            style={{ textAlign: 'left', opacity: '0.6' }}
          >
            {' '}
            {valueCard.para}{' '}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className='col bg-accent'
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 20,
      }}
    >
      <div style={{}}>
        <img
          style={{ objectFit: 'cover' }}
          src={valueCard.image}
          alt={valueCard.title}
        />
      </div>
      <p style={{ marginBlock: 20 }} className='fw-bold fs-large stripped'>
        {valueCard.title}
      </p>
      <p className='' style={{ textAlign: 'center', opacity: '0.6' }}>
        {valueCard.para}
      </p>
    </div>
  );
}
