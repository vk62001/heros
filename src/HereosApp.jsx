import React from 'react'
import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';

const HereosApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default HereosApp;