import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production',
  state: {
    connect: false,
    message: null
  },
  mutations: {
    SOCKET_CONNECT: (state, status) => { 
      console.log('111');
      state.connect = true;
    },
    SOCKET_USER_MESSAGE: (state, message) => {
      console.log('22');
      state.message = message;
    }
  },
  actions: {
    otherAction: (context, type) => {
      console.log('44');
      return true;
    },
    socket_userMessage: (context, message) => {
      console.log('33');
      context.dispatch('newMessage', message);
      context.commit('NEW_MESSAGE_RECEIVED', message);
      if (message.is_important) {
        context.dispatch('alertImportantMessage', message);
      }
    }
  }
})
