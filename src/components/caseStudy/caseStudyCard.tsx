import { caseStudyCardSpec } from '../../data/product';
import { LinkBox } from '../linkBox/LinkBox';

interface caseStudyCardProp {
  caseStudyCard: caseStudyCardSpec;
}

export default function CaseStudyCard({ caseStudyCard }: caseStudyCardProp) {
  return (
    <div
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '24px' }}
    >
      <img
        style={{ marginBottom: '16px' }}
        src={caseStudyCard.image}
        alt={Math.random().toString()}
      />
      <div style={{ textAlign: 'left' }}>
        {caseStudyCard.text}
        <div style={{ marginTop: '12px' }}>
          <LinkBox aClassName='button3' link={caseStudyCard.button} />
        </div>
      </div>
    </div>
  );
}
