import { footerData } from "../../data/footer";
import { LinkBox } from "../linkBox/LinkBox";

export function Footer():JSX.Element{
    return <div className="row" style={{padding:'20px',justifyContent:"space-around"}}>
        <div className="col" style={{justifyContent:'space-around'}}>
            {/* get better res. logo */}
            <img src={footerData.logo}/>
            <div className="row">
                {
                    footerData.socialLinks.map((link)=>{
                        return <LinkBox link={link} aClassName="button" key={link.url}/>
                    })
                }
            </div>
        </div>
        <div className="col">
            <p>{footerData.quickLinksTitle}</p>
            {
                footerData.quickLinks.map((link)=>{
                    return <LinkBox link={link} aClassName="footerLink" key={link.text}/>
                })
            }
        </div>
        <div className="col">
            <p>{footerData.policyLinksTitle}</p>
            {
                footerData.policyLinks.map((link)=>{
                    return <LinkBox link={link} aClassName="footerLink" key={link.text}/>
                })
            }
        </div>
        <div className="col">
            <p>{footerData.subscribeToNewsletterTitle}</p>
            {/* input */}
            {/* address, cin, gst */}
        </div>
    </div>
}
