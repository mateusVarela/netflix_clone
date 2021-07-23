import React from 'react'
import './movieRow.css'

export default ({ title, items }) => {
  return (
    <div>
      <h2>
        {title}
      </h2>
      <div className="movieList--listArea">
        {items.results.length > 0 && items.results.map(() => (

        ))}
      </div>
    </div>
  )
}