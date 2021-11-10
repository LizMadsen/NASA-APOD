import { reactive } from 'vue'
import { Apod } from './models/apod'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  results: [],
})
