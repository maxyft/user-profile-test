export interface IUserProfileState {
  userInfo: IUserInfo
  vacationInfo : IVacationInfo
  workInfo: IWorkInfo
  skills: ISkillInterest[]
  possibleSkills: ISkillInterest[]
  interests: ISkillInterest[]
  possibleInterests  : ISkillInterest[]
}

export interface IUserInfo {
  firstName: string
  lastName: string
  patronymic: string
  photoSrc: string
  about: string
  birthDate: string
}

export interface IWorkInfo {
  supervisor: string
  workGroup: string
  workPlace: string
  position: string
}

export interface IVacationInfo {
  vacationDays: number
  vacationPlanned: {
    start: string | Date
    end: string | Date
  }
}

export interface ISkillInterest {
  id: number,
  name: string
}

export interface IUserProfilePost {
  userInfo: IUserInfo
  workInfo: IWorkInfo
  skills: ISkillInterest[]
  interests: ISkillInterest[]
  vacationInfo: IVacationInfo
  possibleSkills: ISkillInterest[]
  possibleInterests: ISkillInterest[]
}