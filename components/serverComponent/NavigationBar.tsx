import { SignInButton } from '@clerk/nextjs'
import React from 'react'

export const NavigationBar = () => {
  return (
    <header><nav></nav><div><SignInButton /></div></header>
  )
}