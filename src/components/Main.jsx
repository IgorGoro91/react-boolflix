import { useGlobalContext } from "../context/GlobalContext"
import { ResultsList } from "./Resultslist"

const Main = () => {

    const { movies, tvs } = useGlobalContext()
    const HandleStarts = (vote) => Math.ceil( vote / 2)

    return(
        <main>
            <h2>Films</h2>
            <ResultsList type="movies" items={movies} />

            {/* <ul>
                {
                    movies.map( (elem) => {
                        return(
                            <li key={elem.id}>
                                {elem.title} - {elem.original_language} - {elem.original_title} - { HandleStarts(parseInt (elem.vote_avarage))}
                            </li>
                        )
                    })

                }
            </ul> */}

            <h2>Serie TV</h2>
            <ResultsList type="movies" items={tvs} />

            {/* <ul>
                {
                    tvs.map( (elem) => {
                        return(
                            <li key={elem.id}>
                                {elem.name}
                            </li>
                        )
                    })

                }
            </ul> */}
        </main>
    )
}
export default Main