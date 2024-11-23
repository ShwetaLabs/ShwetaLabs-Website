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
        }}
      >
        <div
          style={{
            margin: 'auto',
            minWidth: '25%',
            maxWidth: '25%',
            padding: '0px 10%',
          }}
        >
          <img
            style={{ objectFit: 'scale-down', width: '90%' }}
            src={valueCard.image}
            alt={valueCard.title}
          />
        </div>
        <div style={{ marginTop: '16px', marginRight: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <span
              className='fs-samller'
              style={{ fontWeight: 700, marginBottom: '16px' }}
            >
              {' '}
              {valueCard.title}{' '}
            </span>
          </div>
          <div
            className='fs-smaller'
            style={{
              lineHeight: '1.4',
              textAlign: 'left',
              opacity: '0.6',
              paddingBottom: '20px',
            }}
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
        padding: 5,
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
