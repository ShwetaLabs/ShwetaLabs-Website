import { productData } from '../data/product';
import SleuthHead from '../components/sleuthHead/sleuthHead';
import CapabilityRow from '../components/capabilites/capabilityRow';
import CaseStudy from '../components/caseStudy/caseStudy';
import { isDesktop } from '../utils';

export function Products(): JSX.Element {
  return isDesktop() ? (
    <div style={{ paddingLeft: '160px', paddingRight: '160px' }}>
      <div style={{ marginBottom: '160px' }}>
        <SleuthHead sleuthHead={productData.head} />
      </div>

      <div>
        {productData.capabilities.capababilites.map((it, index) => (
          <div style={{ margin: '30px' }}>
            <CapabilityRow capability={it} imageOnLeft={index % 2 == 0} />
          </div>
        ))}
      </div>

      {/* <div>
      <CaseStudy caseStudy={productData.caseStudy} perRow={3} />
    </div> */}
    </div>
  ) : (
    <div style={{}}>
      <div style={{ marginBottom: '160px' }}>
        <SleuthHead sleuthHead={productData.head} />
      </div>

      <div>
        {productData.capabilities.capababilites.map((it, index) => (
          <div style={{ margin: '30px' }}>
            <CapabilityRow capability={it} imageOnLeft={index % 2 == 0} />
          </div>
        ))}
      </div>

      {/* <div>
    <CaseStudy caseStudy={productData.caseStudy} perRow={3} />
  </div> */}
    </div>
  );
}
