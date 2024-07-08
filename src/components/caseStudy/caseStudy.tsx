import { caseStudyCardSpec, caseStudySpec } from '../../data/product'
import CaseStudyCard from "./caseStudyCard"

interface caseStudy {
    caseStudy: caseStudySpec
    perRow: number
}

export default function CaseStudy({ caseStudy, perRow }: caseStudy) {
    function createRows(cards: caseStudyCardSpec[], perRow: number) {
        var rows: JSX.Element[] = [];
        var inRow: JSX.Element[] = [];
        for (var i = 0; i < cards.length; i++) {
            inRow.push(<div style={{ margin: "16px" }}><CaseStudyCard caseStudyCard={cards[i]} /></div>)
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
            <strong style={{ fontSize: "80px" }}> {caseStudy.title} </strong>
            <div> {createRows(caseStudy.caseStudyCards, perRow)} </div>
        </div>
    )
}
