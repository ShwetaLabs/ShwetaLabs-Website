
export interface subCapabilitiesCardSpec {
    image: string,
    title: string,
    paras: string,
}
export interface capabilityCardSpec {
    title: string,
    image: string,
    subcap: subCapabilitiesCardSpec[]
}

export interface capabilitiesSpec {
    title: string,
    subtitle: string,
    capababilites: capabilityCardSpec[]
	}
