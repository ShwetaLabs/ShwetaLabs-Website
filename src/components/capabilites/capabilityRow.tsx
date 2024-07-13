import {
  capabilityCardSpec,
  subCapabilitiesCardSpec,
} from '../../data/capabilities';

interface capabilitesProp {
  capability: capabilityCardSpec;
  imageOnLeft: boolean;
}

interface subCapabilityProp {
  subCapability: subCapabilitiesCardSpec;
  onLeft: boolean;
  last: boolean;
}

function SubcapabilityRow({ subCapability, onLeft, last }: subCapabilityProp) {
  const leftBorder = onLeft ? '1px solid rgba(255, 255, 255, 0.3)' : '0px';
  const rightBorder = !onLeft ? '1px solid rgba(255, 255, 255, 0.3)' : '0px';
  const bottomBorder = !last ? '1px solid rgba(255, 255, 255, 0.3)' : '0px';
  return (
    <div
      style={{
        borderLeft: leftBorder,
        borderBottom: bottomBorder,
        borderRight: rightBorder,
        display: 'flex',
        justifyContent: 'space-between',
        gap: '40px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '52.5px',
          paddingLeft: '40px',
          paddingBottom: '52.5px',
        }}
      >
        <img src={subCapability.image} alt={subCapability.title} />
      </div>
      <div
        style={{
          paddingTop: '32px',
          paddingRight: '52px',
          paddingBottom: '32px',
        }}
      >
        <strong> {subCapability.title} </strong>
        <p> {subCapability.paras} </p>
      </div>
    </div>
  );
}

export default function CapabilityRow({
  capability,
  imageOnLeft,
}: capabilitesProp) {
  const imagePortion = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        marginLeft: '52px',
        marginTop: '32px',
        marginRight: '32px',
        marginBottom: '32px',
      }}
    >
      <strong style={{ fontSize: '32px' }}>{capability.title}</strong>
      <div
        style={{ alignContent: 'center', marginTop: '49px', height: '100%' }}
      >
        <img
          style={{ objectFit: 'cover' }}
          src={capability.image}
          alt={capability.title}
        />
      </div>
    </div>
  );

  const listPortion = (
    <div style={{ width: '60%', textAlign: 'left' }}>
      {capability.subcap.map((it, index) => (
        <SubcapabilityRow
          subCapability={it}
          onLeft={imageOnLeft}
          last={index === capability.subcap.length - 1}
        />
      ))}
    </div>
  );

  return imageOnLeft ? (
    <div
      style={{ display: 'flex', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
    >
      {imagePortion}
      {listPortion}
    </div>
  ) : (
    <div
      style={{ display: 'flex', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
    >
      {listPortion}
      {imagePortion}
    </div>
  );
}
