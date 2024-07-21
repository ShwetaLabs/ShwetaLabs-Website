import Squad from '../components/squad/squad';
import TitleInfo from '../components/titleInfo/titleInfo';
import { aboutData, valueCardSpec } from '../data/about';
import Values from '../components/values/values';
import ValueCard from '../components/values/valueCard';

export function About(): JSX.Element {
  function createRows(values: valueCardSpec[]) {
    var rows: JSX.Element[] = [];
    var inRow: JSX.Element[] = [];
    for (var i = 0; i < values.length; i++) {
      inRow.push(
        <div style={{ width: 'calc(50% - 16px)' }}>
          <ValueCard valueCard={values[i]} onLeft={false} />
        </div>,
      );
      if (inRow.length === 2) {
        rows.push(
          <div
            style={{
              height: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {inRow.concat()}
          </div>,
        );
        inRow = [];
      }
    }
    rows.push(
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {inRow.concat()}
      </div>,
    );
    return rows;
  }

  return (
    <div
      style={{
        padding: '160px',
        display: 'flex',
        flexDirection: 'column',
        gap: '160px',
      }}
    >
      <TitleInfo titleInfo={aboutData.titleInfo} onSide={true} />
      <div style={{ height: '467px' }}>{createRows(aboutData.visions)}</div>
      <Values values={aboutData.values} />
      <Squad squad={aboutData.squad} />
    </div>
  );
}
