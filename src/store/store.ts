import Vue from 'vue'
import Vuex from 'vuex'
import UserModel from '@/models/UserModel';
import OwnershipModel from '@/models/OwnershipModel';
import GameModel from '@/models/GameModel';

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    
    // Assign models as types for these arrays of objects to avoid TypeScript issues
    users: Array<UserModel>(),
    ownerships: Array<OwnershipModel>(),
    games: Array<GameModel>(),
    newUser: {
      userId: '',
      firstName: '',
      lastName: '',
      emailAddress: '',
      dateOfBirth: '',
      password: ''
    },
    newOwnership: {
      ownershipId: '',
      userAccountId: '',
      ownedGameId: '',
      ownershipState: '',
      registrationDate: ''
    },
    newGame: {
      gameId: '',
      name: '',
      ageRestriction: '',
      thumbnail: ''
    }
  },
  
  mutations: {
    initialiseStore(state) {
      
      // Check localStorage for saved user data
      if(localStorage.getItem('users')) {
        state.users = JSON.parse(localStorage.getItem('users') || '{}');
      }
      
      // Check localStorage for saved ownership data
      if(localStorage.getItem('ownerships')) {
        state.ownerships = JSON.parse(localStorage.getItem('ownerships') || '{}');
      }
      
      // Check localStorage for saved games data
      if(localStorage.getItem('games')) {
        state.games = JSON.parse(localStorage.getItem('games') || '{}');
      }
      
    },
        
    // User mutations
    GET_USER(state, user) {
      state.newUser = {
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        emailAddress: user.emailAddress,
        dateOfBirth: user.dateOfBirth,
        password: user.password
      }
    },
    ADD_USER(state) {
      state.users.push({
        body : state.newUser
      })
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    EDIT_USER(state, user) {
      const users = state.users
      users.splice(users.indexOf(user), 1)
      state.users = users
      state.newUser = user.body
    },
    REMOVE_USER(state, user) {
      const users = state.users
      users.splice(users.indexOf(user), 1)
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    CLEAR_USER(state) {
      state.newUser = {
        userId: '',
        firstName: '',
        lastName: '',
        emailAddress: '',
        dateOfBirth: '',
        password: ''
      }
    },
    
    // Ownership mutations
    GET_OWNERSHIP(state, ownership) {
      state.newOwnership = {
        ownershipId: ownership.ownershipId,
        userAccountId: ownership.userAccountId,
        ownedGameId: ownership.ownedGameId,
        ownershipState: ownership.ownershipState,
        registrationDate: ownership.registrationDate
      }
    },
    ADD_OWNERSHIP(state) {
      state.ownerships.push({
        body: state.newOwnership
      })
      localStorage.setItem('ownerships', JSON.stringify(state.ownerships));
    },
    CHANGE_OWNERSHIP(state, ownership) {
      ownership.body.ownershipState === 'Owned' ?
        ownership.body.ownershipState = 'Revoked' :
        ownership.body.ownershipState = 'Owned';
      localStorage.setItem('ownerships', JSON.stringify(state.ownerships));
    },
    REMOVE_OWNERSHIP(state, ownership) {
      const ownerships = state.ownerships
      ownerships.splice(ownerships.indexOf(ownership), 1)
      localStorage.setItem('ownerships', JSON.stringify(state.ownerships));
    },
    
    // Game mutations
    GET_GAME(state, game) {
      state.newGame = {
        gameId: game.gameId,
        name: game.name,
        ageRestriction: game.ageRestriction,
        thumbnail: game.thumbnail
      }
    },
    ADD_GAME(state) {
      state.games.push({
        body : state.newGame
      })
      localStorage.setItem('games', JSON.stringify(state.games));
    },
    EDIT_GAME(state, game) {
      const games = state.games
      games.splice(games.indexOf(game), 1)
      state.games = games
      state.newGame = game.body
    },
    REMOVE_GAME(state, game) {
      const games = state.games
      games.splice(games.indexOf(game), 1)
      localStorage.setItem('games', JSON.stringify(state.games));
    },
    CLEAR_GAME(state) {
      state.newGame = {
        gameId: '',
        name: '',
        ageRestriction: '',
        thumbnail: ''
      }
    }
    
  },
  
  actions: {
    
    // User actions
    getUser({commit}, user) {
      commit('GET_USER', user)
    },
    addUser({commit}) {
      commit('ADD_USER')
    },
    editUser({commit}, user) {
      commit('EDIT_USER', user)
    },
    removeUser({commit}, user) {
      commit('REMOVE_USER', user)
    },
    clearUser({commit}) {
      commit('CLEAR_USER')
    },
    
    // Ownership actions
    getOwnership({commit}, ownership) {
      commit('GET_OWNERSHIP', ownership)
    },
    addOwnership({commit}) {
      commit('ADD_OWNERSHIP')
    },
    changeOwnership({commit}, ownership) {
      commit('CHANGE_OWNERSHIP', ownership)
    },
    removeOwnership({commit}, ownership) {
      commit('REMOVE_OWNERSHIP', ownership)
    },
    
    // Game actions
    getGame({commit}, game) {
      commit('GET_GAME', game)
    },
    addGame({commit}) {
      commit('ADD_GAME')
    },
    editGame({commit}, game) {
      commit('EDIT_GAME', game)
    },
    removeGame({commit}, game) {
      commit('REMOVE_GAME', game)
    },
    clearGame({commit}) {
      commit('CLEAR_GAME')
    }
    
  },
  
  getters: {
    
    // Getters for users
    newUser: state => state.newUser,
    getUsers: state => state.users.filter((user) => {return user}),
    
    // Getters for ownerships
    newOwnership: state => state.newOwnership,
    getOwnerships: state => state.ownerships.filter((ownership) => {return ownership}),
    
    // This getter filters the ownerships by an user id to get the ownerships connected to that user id
    getOwnershipsById: (state) => (id : string) => {
      return state.ownerships.filter(ownership => ownership.body.userAccountId == id && ownership.body.ownershipState !== 'Revoked')
    },
    
    // Getters for games
    newGame: state => state.newGame,
    
    // This getter filters the games by an array of ids to get a user library of games
    getGamesByIds: (state) => (ids : string[]) => {
      return state.games.filter(game => ids.includes(game.body.gameId))
    },
    getGames: state => state.games.filter((game) => {return game})
  
  }
  
})
