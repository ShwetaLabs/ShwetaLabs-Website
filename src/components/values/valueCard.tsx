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
            <span style={{ marginBottom: '16px', fontSize: '20px' }}>
              {' '}
              {valueCard.title}{' '}
            </span>
          </div>
          <div style={{ textAlign: 'left', fontSize: '14px', opacity: '0.6' }}>
            {' '}
            {valueCard.para}{' '}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      style={{
        paddingRight: '52px',
        paddingLeft: '52px',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <img
          style={{ objectFit: 'cover' }}
          src={valueCard.image}
          alt={valueCard.title}
        />
      </div>
      <div>
        <strong style={{ fontSize: '64px' }}> {valueCard.title} </strong>
        <p style={{ textAlign: 'center', opacity: '0.6' }}>{valueCard.para}</p>
      </div>
    </div>
  );
}
