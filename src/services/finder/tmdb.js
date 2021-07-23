
const API_KEY = "7d6a80b4b420e1ab16fb45f2540068c2"
const API_URL = "https://api.themoviedb.org/3"

const findData = async (url) => {
  const req = await fetch(`${API_URL}${url}`)
  const json = await req.json()
  return json
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        item: await findData(`/discover/tv?wich_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados',
        item: await findData(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        item: await findData(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: "Ação",
        item: await findData(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: "Comédia",
        item: await findData(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: "Romance",
        item: await findData(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: "Terror",
        item: await findData(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
    ]
  }
}