import { profileSpec, squadSpec } from '../../data/squad';
import { isDesktop } from '../../utils';
import Profile from '../profile/profile';

interface squadProp {
  squad: squadSpec;
}

export default function Squad({ squad }: squadProp) {
  function createRows(profiles: profileSpec[], perRow: number) {
    var rows: JSX.Element[] = [];
    var inRow: JSX.Element[] = [];
    for (var i = 0; i < profiles.length; i++) {
      inRow.push(
        <div style={{ margin: '16px' }}>
          <Profile profile={profiles[i]} />
        </div>,
      );
      if (inRow.length == perRow) {
        rows.push(
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {inRow.concat()}
          </div>,
        );
        inRow = [];
      }
    }
    rows.push(<div style={{ margin: '10px' }}>{inRow.concat()}</div>);
    return rows;
  }
  return isDesktop() ? (
    <div>
      <p className='fw-bold fs-x-large'> {squad.title} </p>
      <div
        className='row'
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        {createRows(squad.profiles, squad.perRow)}
      </div>
    </div>
  ) : (
    <div>
      <p className='fw-bold fs-x-large centered'> {squad.title} </p>
      <div
        className='row'
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        {createRows(squad.profiles, 1)}
      </div>
    </div>
  );
}
