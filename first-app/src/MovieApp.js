import {useState , useEffect} from "react";

export default function MovieApp() {
    const [ loading, setLoading ] = useState(true);
    const [ movies, setMovies] = useState([]);

    const getMovies = async () => {
        const url = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year';
        const json = await (await fetch(url)).json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    },[]);

    return(
        <div>
            {
                loading
                ? <h1>loading...</h1>
                : <div>
                    {
                        movies.map(movie => (
                            <div key={movie.id}>
                                <h2><a href="">{movie.title}</a></h2>
                                <img src={movie.medium_cover_image} alt={movie.title} />
                                <p>{movie.summary}</p>
                                <ul>
                                    {
                                        movie.genres.map((item,idx) => 
                                        (<li key={idx}>{item}</li>))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                  </div>
            }
        </div>
    );
}