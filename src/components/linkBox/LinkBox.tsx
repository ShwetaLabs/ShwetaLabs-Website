import { linkSpec } from "../../data/navigation"

export interface ILinkBoxProps{
    link:linkSpec,
    aClassName?:string
}
export function LinkBox({link,aClassName}:ILinkBoxProps):JSX.Element{
    // should take a linkSpec
    // and render it
    // should make use of iconOnly option
    return <a className={aClassName||''} href={link.url}>
        {(link.icon == null?<img className={link.icon} />:null)}
        {(!link.iconOnly)?<>{link.text}</>:null}
    </a>
}
