import axios from 'axios';

const routes = {
  contactUsForm: '/contactus',
};
const mailerSendBase = 'https://api.mailersend.com/v1/';
const token = process.env.MAILER_SEND_API_TOKEN as string;
// const mailerSend = new MailerSend({
//   apiKey: token,
// });
export class MailService {
  baseUrl = '';

  public async postContactUsForm(
    firstName: string,
    lastName: string,
    email: string,
    message: string,
  ) {
    // const recipients = [new Recipient('contact@shwetalabs.com', 'Your Client')];
    let response = {
      success: false,
      data: null,
    };
    const url = mailerSendBase + 'email';
    const sender = {
      email: 'MS_qldS2v@trial-o65qngkjv83lwr12.mlsender.net',
      name: 'contactus',
    };
    const recipient = {
      email: 'contact@shwetalabs.com',
      name: 'Contacts',
    };

    const body = {
      from: sender,
      to: [recipient],
      subject: 'New Contact Request',
      html: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Message: ${message}
        `,
    };
    // .setSubject('New Contact Us Request')
    // .setHtml(
    // )
    try {
      console.log(process.env.MAILER_SEND_API_TOKEN);
      // const rawResponse = await axios.post(url, JSON.stringify(body), {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      // console.log(rawResponse);
      // if (rawResponse.status === 200) {
      //   response.success = true;
      //   response.data = rawResponse.data;
      // }
    } catch (error) {
      // todo once we have an api.
      console.log(error);
    }
    return response;
  }
}
