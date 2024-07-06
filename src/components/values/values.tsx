
import { valuesSpec, valueCardSpec } from "../../data/about"
import ValueCard from "./valueCard"

interface valuesProp {
    values: valuesSpec
}

export default function Values({ values }: valuesProp): JSX.Element {
    function createRows(values: valueCardSpec[]) {
        var rows: JSX.Element[] = [];
        var inRow: JSX.Element[] = [];
        for (var i = 0; i < values.length; i++) {
            inRow.push(<div style={{ margin: "16px", width: "50%"}}><ValueCard valueCard={values[i]} onLeft={true} /></div>)
            if (inRow.length == 2) {
                rows.push(<div style={{ display: "flex", justifyContent: "space-between"}}>{inRow.concat()}</div>);
                inRow = [];
            }
        }
        rows.push(<div style={{ display: "flex", justifyContent: "space-between" }}>{inRow.concat()}</div>);
        return rows;
    }
    return (
        <div>
            <div style={{ padding: "0px 192px" }}>
                <div style={{ fontSize: "20px" }} > {values.superTitle} </div>
                <div style={{ fontSize: "100px" }} > {values.title} </div>
                <div> {values.para} </div>
            </div>
            <div> {createRows(values.cards)} </div>
        </div>
    )
}
