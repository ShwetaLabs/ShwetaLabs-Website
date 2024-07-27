import { profileSpec } from '../../data/squad';
import { LinkBox } from '../linkBox/LinkBox';

interface profileProp {
  profile: profileSpec;
}

export default function Profile({ profile }: profileProp) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '20px',
        maxWidth: '300px',
      }}
    >
      <img
        style={{ maxWidth: '100%' }}
        src={profile.image}
        alt={profile.name}
      />
      <div
        style={{
          marginTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '12px',
        }}
      >
        <div
          style={{
            width: '80%',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <strong> {profile.name}</strong>
          <div style={{ fontSize: '14px', opacity: '80%' }}> {profile.job}</div>
        </div>
        <div style={{ width: '20%' }}>
          <LinkBox link={profile.contact} aClassName='button fs-large' />
        </div>
      </div>
      <div style={{ textAlign: 'left', fontSize: '14px' }}>{profile.intro}</div>
    </div>
  );
}
