import { textPageSpec } from '../../data/utils';
import { Para } from './Para';
import './StaggeredPara.css';

interface ItextPageSpec {
  paras: textPageSpec;
}

export function StaggeredPara({ paras }: ItextPageSpec) {
  return (
    <div>
      {paras.title}
      <br />
      {paras.paragraphs.map((value, index) => (
        <div
          key={index}
          className={index % 2 === 0 ? 'left-align' : 'right-align'}
        >
          <Para para={value} />
        </div>
      ))}
    </div>
  );
}
