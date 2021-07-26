import React from 'react'
import './featuredMovie.css'

export default ({item}) => {
    const releaseYear = item.first_air_date.split("-")
    const allGenres = []
    for (let i in item.genres) {
        allGenres.push(item.genres[i].name) 
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">  
                    <div className="featured--name">
                        {item.original_name}
                    </div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{releaseYear[0]}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">
                        {item.overview}
                    </div>
                    <div className="buttons">

                    </div>
                    <div className="featured--genres">
                        <strong>Gêneros:</strong> {allGenres.join(', ')}
                    </div>
                </div> 
            </div> 
        </section>
    )
}