import React, { useState } from 'react'
import List from './List'

import birthdays from './data'

const App = () => {
  const [people, setPeople] = useState(birthdays)
  const clearBirthdays = () => setPeople([])
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List birthdays={people} />
        <button onClick={clearBirthdays}>clear all</button>
      </section>
    </main>
  )
}

export default App
