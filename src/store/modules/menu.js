

import untis from '../../utils'

const state = {
  headerId: Number(untis.getSessionStorage('headerId')) || 0, //头部tab的切换
  headerHiden: true
}
const mutations = {
  headerId: (state, headerId) => {
    untis.setSessionStorage('headerId', headerId)
    state.headerId = headerId;
  },
  SET_HEADERHIDDEN: (state, headerHiden) => {
    state.headerHiden = headerHiden;
  }
}

export default {
  namespaced: true,
  state,
  mutations
}