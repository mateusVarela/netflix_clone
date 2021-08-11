import React, {useState} from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './movieRow.css'

export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(-400)

    const handLeftArrow = () => {
      let scrollValue = scrollX + Math.round(window.innerWidth / 2)
      if (scrollValue > 0) {
        scrollValue = 0
      }
      setScrollX(scrollValue)
    }

    const handRightArrow = () => {
      let scrollValue = scrollX - Math.round(window.innerWidth / 2)
      const listWidth = items.results.length * 201
      if ((window.innerWidth - listWidth) > scrollValue) {
        scrollValue = (window.innerWidth - listWidth) - 60
      }
      setScrollX(scrollValue)
    }

    const posts = items.results.map((item, key) => (`https://image.tmdb.org/t/p/w300${item.poster_path}`))

    const card = items.results.map((item, key) => (
      <div key={key} className="movieRow--item">
        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
      </div>
    ))

      console.log(card);

    console.log(posts)
  return (
    <div className="movieRow">
      <h2>
        {title}
      </h2>
      <div className="movieList--listArea">
        <div className="movieRow--list">
        <AliceCarousel infinite keyboardNavigation mouseTracking items={card}/>
        </div>
      </div>
    </div>
  )
}
//<AliceCarousel mo useTracking items={items.results.map((item, key) => (`https://image.tmdb.org/t/p/w300${item.poster_path}`))} />