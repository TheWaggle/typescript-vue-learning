import type { TodoState } from './TodoState'

export interface TodoItem {
  id: number
  name: string
  state: TodoState.Working | TodoState.Done
}
