import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { userProfileStore } from 'modules/user-profile/user-profile.store'

Vue.use(Vuex)

const store: StoreOptions<any> = {
  modules: {
    USER_PROFILE: userProfileStore
  },
  plugins: []
}

export default new Vuex.Store<any>(store)
