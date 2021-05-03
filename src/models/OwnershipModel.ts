export default class OwnershipModel {
  
  body: {
    ownershipId: string,
    userAccountId: string, 
    ownedGameId: string, 
    ownershipState: string, 
    registrationDate: string 
  }

  constructor() {
    this.body = {
      ownershipId: '',
      userAccountId: '',
      ownedGameId: '',
      ownershipState: '',
      registrationDate: ''
    };
  }

}
