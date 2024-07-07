import { CSSProperties } from "react";
import { footerData } from "../../data/footer";
import { LinkBox } from "../linkBox/LinkBox";
const outerDivStyle:CSSProperties = {display:'block',position:"relative",bottom:0,right:0,left:0};
export function Footer():JSX.Element{
    return <div className="col" style={outerDivStyle}>
        <div className="row thin-bordered" style={{padding:'20px',justifyContent:"space-around", borderInline:0}}>
        <div className="col" key={footerData.logo} style={{justifyContent:'space-around'}}>
            {/* get better res. logo */}
            <img src={footerData.logo}/>
        </div>
        <div className="col" key={footerData.quickLinksTitle} style={{alignItems:"flex-start"}}>
            <p className="shady-70">{footerData.quickLinksTitle}</p>
            {
                footerData.quickLinks.map((link)=>{
                    return <LinkBox link={link} aClassName="footerLink" key={link.text}/>
                })
            }
        </div>
        <div className="col" key={footerData.policyLinksTitle} style={{alignItems:"flex-start"}}>
            <p className="shady-70">{footerData.policyLinksTitle}</p>
            {
                footerData.policyLinks.map((link)=>{
                    return <LinkBox link={link} aClassName="footerLink" key={link.text}/>
                })
            }
        </div>
        <div className="col" key={footerData.addressTitle} style={{alignItems:"flex-start"}}>
            <p className="shady-70">{footerData.addressTitle}</p>
            {
                <p className="stripped" key={footerData.address}>{footerData.address}</p>
            }
            {
                footerData.businessDetails.map((value)=>{
                    return <p className="stripped" key={value}>{value}</p>
                })
            }
            <div className="row" style={{marginTop:48}}>
                {
                    footerData.socialLinks.map((link)=>{
                        return <LinkBox link={link} aClassName="button" key={link.url}/>
                    })
                }
            </div>
        </div>
        </div>
        <p className="fs-small" style={{textAlign:'center'}}>{footerData.copyrightText}</p>
    </div>
}