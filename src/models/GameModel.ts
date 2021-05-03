export default class GameModel {
  
  body: {
    gameId: string,
    name: string, 
    ageRestriction: string, 
    thumbnail: string
  }

  constructor() {
    this.body = {
      gameId: '',
      name: '',
      ageRestriction: '',
      thumbnail: ''
    };
  }

}
