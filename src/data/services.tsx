import { images } from '../rsrc'
import { capabilitiesSpec } from './capabilities'


export const servicesData: capabilitiesSpec = {
    title: "Enim beatae quas snt accusantium",
    subtitle: "Qui numquam blanditiis est aut dicta. Ab unde qui adipisci harum alias est qui temporibus aut. Accusantium eligendi est veniam qui praesentium.",
    capababilites: [
        {
            title: "Comprehensive Forensic Investigations",
            image: images.forensicLogo,
            subcap: [
                {
                    title: "Digital Evidence Collection",
                    image: images.digital,
                    paras: "Our team of experts meticulously collects digital evidence from various sources, ensuring that all relevant data is preserved with the utmost integrity. This process includes securing data from computers, mobile devices, networks, and other digital storage media.",
                },
                {
                    title: "In-Depth Data Analysis",
                    image: images.depth,
                    paras: "Utilising advanced forensic tools and techniques, we analyse collected data to uncover critical information. This includes examining file structures, metadata, deleted files, and hidden data, providing a thorough understanding of the digital environment and uncovering vital clues.",
                },
                {
                    title: "Forensic Imaging",
                    image: images.forensic,
                    paras: "We create exact copies of digital media to ensure that investigations can be conducted without altering the original evidence. This forensic imaging process guarantees that all data is preserved in its original state for further analysis and legal proceedings."
                }
            ]
        },
        {
            title: "Incident Response and Mitigation",
            image: images.responseLogo,
            subcap: [
                {
                    title: "Rapid Incident Response",
                    image: images.headset,
                    paras: "Our team is equipped to respond swiftly to cybersecurity incidents, minimising potential damage and preserving crucial evidence. We work closely with your organisation to contain threats, recover data, and restore normal operations as quickly as possible",
                },
                {
                    title: "Malware Analyis",
                    image: images.malware,
                    paras: "We specialise in identifying, isolating, and analysing malware to understand its origin, functionality, and impact. This detailed analysis helps in developing effective strategies to mitigate current threats and prevent future attacks.",
                },
                {
                    title: "Threat Hunting",
                    image: images.threat,
                    paras: "Proactively search for hidden threats within your digital infrastructure. Our threat hunting services identify vulnerabilities and suspicious activities that standard security measures might miss, ensuring comprehensive protection against cyber threats.",
                },
            ]
        },
        {
            title: "Legal and Compliance Support",
            image: images.legalLogo,
            subcap: [
                {
                    title: "Expert Testimony",
                    image: images.expert,
                    paras: "Our forensic experts are available to provide testimony in legal proceedings, offering clear and concise explanations of the evidence and its implications. We ensure that our findings are presented in a manner that is understandable and compelling to judges, juries, and legal professionals.",
                },
                {
                    title: "Regulatory Compliance",
                    image: images.compliance,
                    paras: "We help organisations navigate complex regulatory requirements related to data security and privacy. Our services ensure that your digital forensics processes comply with industry standards and legal mandates, reducing the risk of non-compliance penalties."
                },
                {
                    title: "Documentation and Reporting",
                    image: images.documentation,
                    paras: "We provide detailed reports that document every step of the forensic process, from evidence collection to analysis and findings. These reports are crucial for legal cases, internal investigations, and compliance audits, offering a clear and thorough account of the forensic investigation.",
                }
            ]
        },
        {
            title: "Training and Capacity Building",
            image: images.trainingLogo,
            subcap: [
                {
                    title: "Custom Training Programs",
                    image: images.laptop,
                    paras: "We offer specialised training programs designed to enhance the skills of your internal teams. Our training covers various aspects of digital forensics, including evidence handling, forensic analysis, and incident response, ensuring that your staff is well-equipped to handle cybersecurity challenges.",
                },
                {
                    title: "Workshops and Seminars",
                    image: images.workshop,
                    paras: "We conduct workshops and seminars to keep your team updated on the latest trends, tools, and techniques in cyber forensics. These sessions are tailored to meet the specific needs of your organisation and foster a culture of continuous learning and improvement.",
                },
                {
                    title: "On-the-Job Training",
                    image: images.job,
                    paras: "Our experts provide hands-on training and mentorship to your team during live investigations. This practical approach ensures that your personnel gain real-world experience and confidence in managing digital forensic activities independently.",
                }


            ]
        }

    ]
}
