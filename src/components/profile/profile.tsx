import { profileSpec } from '../../data/squad'
import { LinkBox } from '../linkBox/LinkBox'

interface profileProp {
    profile: profileSpec
}

export default function Profile({ profile }: profileProp) {
    return (
        <div>
            <img style={{ width: "100%", borderRadius: "10%" }} src={profile.image} alt={profile.name} />
            <div style={{ marginTop:"24px", display: "flex", justifyContent: "space-around" }}>
                <div style={{ textAlign: "left", width: "50%" }}>
                    <strong> {profile.name}</strong>
                    <div style={{opacity:"80%"}}> {profile.job}</div>
                </div>
                <div style={{ width: "50%" }}>
                    <LinkBox link={profile.contact} aClassName="button" />
                </div>
            </div>
            <div style={{ textAlign: "left" }}>
                {profile.intro}
            </div>
        </div>
    )
}
