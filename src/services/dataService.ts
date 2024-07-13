import axios from 'axios';
const routes = {
  contactUsForm: '/contactus',
};
export class DataService {
  baseUrl = '';

  public async postContactUsForm(
    firstName: string,
    lastName: string,
    email: string,
    message: string,
  ) {
    let response = {
      success: false,
      data: null,
    };
    try {
      response.data = (
        await axios.post(this.baseUrl + routes.contactUsForm, {
          firstName,
          lastName,
          email,
          message,
        })
      ).data;
    } catch (error) {
      // todo once we have an api.
    }
    return response;
  }
}
