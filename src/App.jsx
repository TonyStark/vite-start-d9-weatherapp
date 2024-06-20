import { useState } from 'react'
import Current from './Components/Current'

function App() {
  

  return (
    <main>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-5 mt-1">
            <Current/>
          </div>

        </div>
      </div>
    </main>
  )
}

export default App
