import { profileSpec, squadSpec } from "../../data/squad"
import Profile from "../profile/profile"

interface squadProp {
    squad: squadSpec
}

export default function Squad({ squad }: squadProp) {
    function createRows(profiles: profileSpec[], perRow: number) {
        var rows: JSX.Element[] = [];
        var inRow: JSX.Element[] = [];
        for (var i = 0; i < profiles.length; i++) {
            inRow.push(<div style={{margin:"16px"}}><Profile profile={profiles[i]} /></div>)
            if (inRow.length == perRow) {
                rows.push(<div style={{ display: "flex", justifyContent: "space-between" }}>{inRow.concat()}</div>);
                inRow = [];
            }
        }
        rows.push(<div style={{ margin: "10px" }}>{inRow.concat()}</div>);
        return rows;
    }
    return (
        <div>
            <strong style={{ fontSize: "80px" }}> {squad.title} </strong>
            <div>
                {createRows(squad.profiles, squad.perRow)}
            </div>
        </div>
    )

	}
