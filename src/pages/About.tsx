import TitleInfo from '../components/titleInfo/titleInfo'
import { aboutData } from '../data/about'

export function About(): JSX.Element {
    return <div>
        <TitleInfo titleInfo={aboutData.titleInfo} />
    </div>
}
