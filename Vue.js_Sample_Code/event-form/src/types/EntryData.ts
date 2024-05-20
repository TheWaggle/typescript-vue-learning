import { Gender } from './Gender'
import { ParticipationKind } from './ParticipationKind'

export interface EntryData {
  participation: ParticipationKind
  firstName: string
  lastName: string
  gender: Gender
  email: string
  question: string
  impressions: string[]
}

export const defaultEntryData: EntryData = {
  participation: ParticipationKind.Empty,
  firstName: '',
  lastName: '',
  gender: Gender.Others,
  email: '',
  question: '',
  impressions: []
}
