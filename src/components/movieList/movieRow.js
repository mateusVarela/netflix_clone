import React, {useState} from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
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

  return (
    <div className="movieRow">
      <h2>
        {title}
      </h2>
      <div className="movieRow--left" onClick={handLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: 50}} />
      </div>
      <div className="movieRow--right" onClick={handRightArrow}>
        <NavigateNextIcon style={{fontSize: 50}} />
      </div>
      <div className="movieList--listArea">
        <div className="movieRow--list" style={{marginLeft: scrollX, width: items.results.length * 205}}>
          {items.results.length > 0 && items.results.map((item, key) => (
            <div key={key} className="movieRow--item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}