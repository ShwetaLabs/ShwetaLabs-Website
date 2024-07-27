import { images, people } from '../rsrc';
import { linkSpec } from './navigation';

export interface profileSpec {
  image: string;
  name: string;
  job: string;
  intro: string;
  contact: linkSpec;
}

export const naveenData: profileSpec = {
  image: people.naveenA,
  name: 'Naveeen ',
  job: 'Chief Executive Office',
  intro: 'We want to make the bad guys pay.',
  contact: {
    text: 'linkedin',
    url: 'google.com',
    icon: images.LinkedinLogo,
    iconOnly: true,
  },
};

export interface squadSpec {
  title: string;
  profiles: profileSpec[];
  perRow: number;
}

export const squadData = {
  title: 'The Squad',
  profiles: [naveenData],
  perRow: 4,
};
