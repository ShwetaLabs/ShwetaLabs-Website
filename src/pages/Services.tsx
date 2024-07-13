import { servicesData } from '../data/services'
import CapabilityRow from '../components/capabilites/capabilityRow'

export function Services(): JSX.Element {
    return (
        <div style={{ marginLeft: "160px", marginRight: "160px" }}>
            <div style={{ marginLeft: "192px", marginRight: "192px" }}>
                <div style={{ fontSize: "80px" }}>
                    {servicesData.title}
                </div>
                <p>
                    {servicesData.subtitle}
                </p>
            </div>
            {servicesData.capababilites.map(
                (it, index) =>
                    <div style={{ margin: "30px" }}>
                        <CapabilityRow capability={it} imageOnLeft={index % 2 == 0} />
                    </div>
            )}
        </div>
    )
}
