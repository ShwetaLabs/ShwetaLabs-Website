

export interface titleInfoSpec {
    title: string,
    paras: string
}

interface aboutSpec {
    titleInfo: titleInfoSpec,
}

export const aboutData: aboutSpec = {
    titleInfo: {
        title: "Our Story",
        paras: `
We want to make the bad guys pay!!
That’s not a cheesy movie line - that’s what we want to do; and this is our story.

Founder, Naveen A. witnessed first-hand the hurdles law enforcement faced in his own family of police officials; and that sparked the idea of making a range of cyber tools to aid police, military and law enforcement.The end of our start - up story - is the beginning of the next one.The one in which we ‘want to make the bad guys pay’ a reality.
`
    }
}
