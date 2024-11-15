import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './journal/theme'

export const JournalApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}
