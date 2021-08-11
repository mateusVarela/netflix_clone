import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './movieRow.css'

export default ({ title, items }) => {
  const handleDragStart = (e) => e.preventDefault();

  const card = items.results.map((item, key) => (
    <div onDragStart={handleDragStart} key={key} className="movieRow--item">
      <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
    </div>
  ))

  return (
    <div className="movieRow">
      <h2>
        {title}
      </h2>
      <div className="movieList--listArea">
        <div className="movieRow--list">
          <AliceCarousel autoWidth infinite keyboardNavigation items={card} />
        </div>
      </div>
    </div>
  )
}
//<AliceCarousel mo useTracking items={items.results.map((item, key) => (`https://image.tmdb.org/t/p/w300${item.poster_path}`))} />