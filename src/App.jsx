
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import './App.css'

function App() {

  return (
    <>
    <SignedOut>
      <SignInButton />
    </SignedOut>

    <SignedIn>
      <UserButton />

      <h1>You are now logged in</h1>
    </SignedIn>
    </>
  )
}

export default App
