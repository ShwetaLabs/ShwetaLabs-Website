import { paraSpec } from "../data/utils"

interface IPara {
    para: paraSpec
}

export default function Para({ para }: IPara): JSX.Element {
    var payload = <>NOT IMPLEMENTED AS OF NOW</>;
    if (typeof (para.text) !== 'undefined') {
        payload = <>para.text</>;
    }
    else if (typeof (para.list) !== 'undefined') {
        payload = <ul> {para.list.map((value, index) => <li key={index}> {value} </li>)} </ul>
    }
    else if (typeof (para.image) !== 'undefined') {
        payload = <img src={para.image} />
    }

    return (
        <div>
            {payload}
        </div>
    )
}
