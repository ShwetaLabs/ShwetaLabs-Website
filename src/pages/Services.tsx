import { servicesData } from '../data/services';
import CapabilityRow from '../components/capabilites/capabilityRow';
import { isDesktop } from '../utils';

export function Services(): JSX.Element {
  return isDesktop() ? (
    <div style={{ marginLeft: '160px', marginRight: '160px' }}>
      <div style={{ marginLeft: '192px', marginRight: '192px' }}>
        <p className='title2 fs-x-large'>{servicesData.title}</p>
        <p className='shady-70 centered'>{servicesData.subtitle}</p>
      </div>
      {servicesData.capababilites.map((it, index) => (
        <div style={{ margin: '30px' }}>
          <CapabilityRow capability={it} imageOnLeft={index % 2 == 0} />
        </div>
      ))}
    </div>
  ) : (
    <div style={{}}>
      <div style={{}}>
        <p className='title2 fs-x-large'>{servicesData.title}</p>
        <p className='shady-70 centered'>{servicesData.subtitle}</p>
      </div>
      {servicesData.capababilites.map((it, index) => (
        <div style={{ marginTop: 20 }}>
          <CapabilityRow capability={it} imageOnLeft={index % 2 == 0} />
        </div>
      ))}
    </div>
  );
}
