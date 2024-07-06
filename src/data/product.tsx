import { images } from "../rsrc"
import { capabilitiesSpec } from "./capabilities"

export interface sleuthHeadSpec {
    img: string,
    title: string,
    paras: string,
    buttonText: string,
}

export interface productSpec {
    head: sleuthHeadSpec
    capabilities: capabilitiesSpec
}

export const sleuthHead = (
    <div style={{ paddingLeft: "96px", paddingRight: "96px", marginBottom: "32px" }}>
        <img src={images.sleuthLogo} alt="Sleuth" />
        <div style={{ fontSize: "80px" }}>
            A law Enforcement Officer's best friend.
        </div>
    </div>
)

export const productData: productSpec = {
    head: {
        img: images.sleuthLogo,
        title: "A law Enforcement Officer's best friend.",
        paras: "SLEUTH is a sophisticated CDR (Call Detail Record) and IPDR (Internet Protocol Detail Record) analysis tool. It helps agencies analyse CDRs or IPDRs - of individuals and to uncover patterns: such as who they spoke to most frequently, the timing of their last call, their location when the call was made.",
        buttonText: "Book a Demo >"
    },
    capabilities: {
        title: "Enim beatae quas snt accusantium",
        subtitle: "Qui numquam blanditiis est aut dicta. Ab unde qui adipisci harum alias est qui temporibus aut. Accusantium eligendi est veniam qui praesentium.",
        capababilites: [
            {
                title: "Enhanced Investigative Capabilites",
                image: images.investigativeLogo,
                subcap: [
                    {
                        image: images.call,
                        title: "Call Analysis",
                        paras: "SLEUTH uses Call Detail Records (CDR) and Internet Protocol Detail Records (IPDR) to provide detailed maps connecting various callers, analysing call patterns and their possible meaning.",
                    },
                    {
                        image: images.ai,
                        title: "AI Action Plan",
                        paras: "Utilising state-of-the-art AI and machine learning algorithms, SLEUTH can pre-emptively detect threats and provide Law Enforcement Officers with AI interpretation and actionable inputs."
                    },
                    {
                        image: images.profile,
                        title: "Profiling",
                        paras: "Sleuth provides information on the suspect from multiple sources. Names, Call records, Locations, the Suspect’s History, Social Media handles and Organisations they are connected to - forming a detailed Profile."
                    }
                ]
            },
            {
                title: "User-Friendly Uses",
                image: images.userFriendly,
                subcap: [
                    {
                        image: images.easyLogo,
                        title: "Easy to Use interface",
                        paras: "SLEUTH uses Call Detail Records (CDR) and Internet Protocol Detail Records (IPDR) to provide detailed maps connecting various callers, analysing call patterns and their possible meaning.",
                    },
                    {
                        image: images.tailorLogo,
                        title: "Tailor-made Reports",
                        paras: "Utilising state-of-the-art AI and machine learning algorithms, SLEUTH can pre-emptively detect threats and provide Law Enforcement Officers with AI interpretation and actionable inputs."
                    },
					{
							image: images.scalableLogo,
							title: "Scalability",
							paras: "Sleuth provides information on the suspect from multiple sources. Names, Call records, Locations, the Suspect’s History, Social Media handles and Organisations they are connected to - forming a detailed Profile."
						}
                ]
            }
        ]
    }
}
