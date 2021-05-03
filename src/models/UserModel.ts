export default class UserModel {
  
  body: {
    userId: string,
    firstName: string, 
    lastName: string, 
    emailAddress: string, 
    dateOfBirth: string 
  }

  constructor() {
    this.body = {
      userId: '',
      firstName: '',
      lastName: '',
      emailAddress: '',
      dateOfBirth: ''
    };
  }

}
