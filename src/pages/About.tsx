import Squad from '../components/squad/squad'
import TitleInfo from '../components/titleInfo/titleInfo'
import { aboutData, valueCardSpec } from '../data/about'
import Values from "../components/values/values"
import ValueCard from "../components/values/valueCard"

export function About(): JSX.Element {

    function createRows(values: valueCardSpec[]) {
        var rows: JSX.Element[] = [];
        var inRow: JSX.Element[] = [];
        for (var i = 0; i < values.length; i++) {
            inRow.push(<div style={{ margin: "16px", width: "50%"}}><ValueCard valueCard={values[i]} onLeft={false} /></div>)
            if (inRow.length == 2) {
                rows.push(<div style={{ display: "flex", justifyContent: "space-between" }}>{inRow.concat()}</div>);
                inRow = [];
            }
        }
        rows.push(<div style={{ display: "flex", justifyContent: "space-between" }}>{inRow.concat()}</div>);
        return rows;
    }

    return <div style={{ padding: "160px" }}>
        <TitleInfo titleInfo={aboutData.titleInfo} />
		{createRows(aboutData.visions)}
        <Squad squad={aboutData.squad} />
        <Values values={aboutData.values} />
    </div>
}
