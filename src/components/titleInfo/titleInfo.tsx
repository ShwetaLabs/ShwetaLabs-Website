import { titleInfoSpec } from "../../data/about";

interface titleInfoProp {
    titleInfo: titleInfoSpec
}

export default function TitleInfo({ titleInfo }: titleInfoProp): JSX.Element {
    return (
        <div className="row" style={{padding:"30px", justifyContent:"space-around"}}>
            <div className="col" style={{width:"50%", fontSize:'120px'}}>
                <strong>{titleInfo.title}</strong>
            </div>
            <div className="col" style={{width:"50%", whiteSpace:"pre-wrap", textAlign: "left"}}>
                {titleInfo.paras}
            </div>
        </div>
    )
}
