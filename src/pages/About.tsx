import Squad from '../components/squad/squad'
import TitleInfo from '../components/titleInfo/titleInfo'
import { aboutData } from '../data/about'

export function About(): JSX.Element {
    return <div style={{padding:"30px"}}>
        <TitleInfo titleInfo={aboutData.titleInfo} />
		<Squad squad={aboutData.squad} />
    </div>
}
