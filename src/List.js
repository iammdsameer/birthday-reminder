import React from 'react'

const List = ({ birthdays }) => {
  return (
    <>
      {birthdays.map(({ name, id, image, age }) => (
        <article key={id} className="person">
          <img src={image} alt="dp" />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </article>
      ))}
    </>
  )
}

export default List
