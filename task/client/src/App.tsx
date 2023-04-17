import { useState } from 'react'

import Form from "./components/Form"
import Tasks from "./components/Tasks"

function App() {
  
  return (
    <section>
    <h2>Task manger </h2>
    <Form />
    <Tasks />
    </section>     
  )
}

export default App
