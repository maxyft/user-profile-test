import {
  ActionTree,
  GetterTree,
  Module,
  MutationTree
} from 'vuex'

import moment from 'moment'

import {
  IUserProfileState
} from 'types/user-profile/types'


const CHANGE_USER_INFO  = 'CHANGE_USER_INFO'
const CHANGE_WORK_INFO  = 'CHANGE_WORK_INFO'
const CHANGE_SKILLS  = 'CHANGE_SKILLS'
const CHANGE_INTERESTS  = 'CHANGE_INTERESTS'

const namespaced: boolean = true

const state: IUserProfileState = {
  userInfo: {
    firstName: 'Сергей',
    lastName: 'Кудинов',
    patronymic: 'Сергеевич',
    photoSrc: '',
    about: '',
    birthDate: '16.04.1989'
  },
  vacationInfo: {
    vacationDays: 24,
    vacationPlanned: {
      start: '30.06.2020',
      end: '12.07.2020'
    }
  },
  workInfo: {
    supervisor: 'Евгений Демур',
    workGroup: 'Группа развития и интеграции внутренних решений',
    workPlace: 'Dentsu Aegis CS',
    position: 'Директор департамента размещения рекламы телевизионного спонсорства и спецпроектов на федеральном и неэфирном ТВ',
  },
  skills: [],
  possibleSkills: [
    {
      id: 0,
      name: 'Product management'
    },
    {
      id: 1,
      name: 'Бизнес процессы'
    },
    {
      id: 2,
      name: 'UI/UX'
    }
  ],
  interests: [],
  possibleInterests: [
    {
      id: 0,
      name: 'Product management'
    },
    {
      id: 1,
      name: 'Бизнес процессы'
    },
    {
      id: 2,
      name: 'UI/UX'
    }    
  ]
}

const getters: GetterTree<IUserProfileState, null> = {
  possibleSkills: (state: IUserProfileState) => state.possibleSkills,
  possibleInterests: (state: IUserProfileState) => state.possibleInterests,
  userInfo: (state: IUserProfileState) => state.userInfo,
  workInfo: (state: IUserProfileState) => state.workInfo,
  skills: (state: IUserProfileState) => state.skills,
  interests: (state: IUserProfileState) => state.interests,
  fullName: (state: IUserProfileState) => `${state.userInfo.lastName} ${state.userInfo.firstName} ${state.userInfo.patronymic}`,
  vacationInfo: (state: IUserProfileState) => state.vacationInfo,
  isVacationPlanned: (state: IUserProfileState) => {
    return !!state.vacationInfo.vacationPlanned.start &&
    !!state.vacationInfo.vacationPlanned.end
  }
}

const actions: ActionTree<IUserProfileState, null> = {

}

const mutations: MutationTree<IUserProfileState> = {
  [CHANGE_USER_INFO](state, userInfo) {
    state.userInfo = userInfo
  },
  [CHANGE_WORK_INFO](state, workInfo) {
    state.workInfo = workInfo
  },
  [CHANGE_SKILLS](state, skills) {
    state.skills = skills
  },
  [CHANGE_INTERESTS](state, interests) {
    state.interests = interests
  }
}

export const userProfileStore: Module<IUserProfileState, null> = {
  actions,
  getters,
  mutations,
  namespaced,
  state
}
