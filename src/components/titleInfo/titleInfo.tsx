import { titleInfoSpec } from "../../data/utils";

interface titleInfoProp {
    titleInfo: titleInfoSpec
	onSide: boolean
}

export default function TitleInfo({ titleInfo, onSide }: titleInfoProp): JSX.Element {
    return onSide ? (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ textAlign: "start", width: "50%", fontSize: '96px' }}>
                <strong>{titleInfo.title}</strong>
            </div>
            <div style={{ width: "50%", whiteSpace: "pre-wrap", textAlign: "left" }}>
                {titleInfo.paras}
            </div>
        </div>
    ) : (
		<div>
		{titleInfo.title}
		{titleInfo.paras}
		</div>
	)
}
