import Squad from '../components/squad/squad'
import TitleInfo from '../components/titleInfo/titleInfo'
import { aboutData } from '../data/about'
import Values from "../components/values/values"

export function About(): JSX.Element {
    return <div style={{ padding: "160px" }}>
        <TitleInfo titleInfo={aboutData.titleInfo} />
        <Squad squad={aboutData.squad} />
        <Values values={aboutData.values} />
    </div>
}
