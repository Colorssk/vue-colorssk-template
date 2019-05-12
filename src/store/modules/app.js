// import Cookies from 'js-cookie'

const app = {
  state: {
    sliderShow: true,
    PreissueUrl: '/universe',
    router: [],
    menuArr: [],
    cavasWidth: '',
    flag: true,
    rights: []
  },
  mutations: {
    CHANGE_SLIDERSHOW: (state, value) => {
      state.sliderShow = value
    },
    CHANEG_PREISSUEURL: (state, value) => {
      state.PreissueUrl = value
    },
    SET_ROUTER: (state, value) => {
      state.router = value
    },
    SET_MENU: (state, value) => {
      state.menuArr = value
    },
    SET_CAVASWIDTH: (state, value) => {
      state.cavasWidth = value
    },
    SET_FLAG: (state, value) => {
      state.flag = value
    },
    SET_RIGHTS: (state, value) => {
      state.rights = value
    }
  },
  actions: {
    changeSliderShow: ({ commit }, value) => {
      commit('CHANGE_SLIDERSHOW', value)
    },
    changePreissueUrl: ({ commit }, value) => {
      commit('CHANEG_PREISSUEURL', value)
    },
    setRounter: ({commit}, value) => {
      commit('SET_ROUTER', value)
    },
    setMenu: ({commit}, value) => {
      commit('SET_MENU', value)
    },
    setCavasWidth: ({commit}, value) => {
      commit('SET_CAVASWIDTH', value)
    },
    setFlag: ({commit}, value) => {
      commit('SET_FLAG', value)
    },
    setRights: ({commit}, value) => {
      commit('SET_RIGHTS', value)
    }
  }
}

export default app
