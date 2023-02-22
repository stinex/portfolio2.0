import { configureStore } from '@reduxjs/toolkit'
import { colorModeReducer } from './theme/theme.slice'

export const store = configureStore({
  reducer: {
    colorMode: colorModeReducer,
  },
})

export type TypeRootState = ReturnType<typeof store.getState>
