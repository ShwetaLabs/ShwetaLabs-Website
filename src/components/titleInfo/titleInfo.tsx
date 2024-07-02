import { titleInfoSpec } from "../../data/about";

interface titleInfoProp {
    titleInfo: titleInfoSpec
}

export default function TitleInfo({ titleInfo }: titleInfoProp): JSX.Element {
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ width: "50%", fontSize: '120px' }}>
                <strong>{titleInfo.title}</strong>
            </div>
            <div style={{ width: "50%", whiteSpace: "pre-wrap", textAlign: "left" }}>
                {titleInfo.paras}
            </div>
        </div>
    )
}
