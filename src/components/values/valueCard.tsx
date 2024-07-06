import { valueCardSpec } from "../../data/about"

interface valueCardProp {
    valueCard: valueCardSpec
    onLeft: boolean
}

export default function ValueCard({ valueCard, onLeft }: valueCardProp) {
    return onLeft ? (
        <div style={{ height: "100%", backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
            <div style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "37%", padding: "50px" }}>
                    <img style={{ objectFit: "cover" }} src={valueCard.image} alt={valueCard.title} />
                </div>
                <div style={{ width: "63%", margin: "32px", height: "calc(100% - 32px)" }}>
                    <div style={{ marginBottom: "16px" }}>
                        <strong style={{ marginBottom: "16px", fontSize: "20px" }}> {valueCard.title} </strong>
                    </div>
                    <div style={{ textAlign: "left", fontSize: "14px" }}> {valueCard.para} </div>
                </div>
            </div>
        </div >
    ) :
        (
            <div style={{ paddingRight: "32px", paddingLeft: "32px", height: "100%", backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                <img style={{ objectFit: "cover" }} src={valueCard.image} alt={valueCard.title} />
                <div>
                    <strong style={{ fontSize: "64px" }}> {valueCard.title} </strong>
                    <p>
                        {valueCard.para}
                    </p>
                </div>
            </div>
        )
}
