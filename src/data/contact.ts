export interface formFieldSpec{
    title:string;
    placeholder:string;
}
export interface contactSpec{
    title:string;
    description:string;
    form:{[key:string]:formFieldSpec}
}
export const contactData = {
    title:'Contact Us',
    description:'Take the next step of your investigation with us.',
    form:{
        firstName:{
            title:'First name',
            placeholder:'Jane'
        },
        lastName:{
            title:'Last name',
            placeholder:'Smitherton'
        },
        emailAddress:{
            title:'Email address',
            placeholder:'email@janesfakedomain.net'
        },
        message:{
            title:'Your message',
            placeholder:'Enter your question or message'
        }
    }
}