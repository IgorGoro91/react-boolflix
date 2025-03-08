import {GB, IT, JP, ES, FR, RO} from 'country-flag-icons/react/3x2';
// import {FaStar, FaRegStar} from 'react-icons/fa;'

export function Card ( { data, type}) {

    const title = type === 'movies' ? data.title : data.name
    const originalTitle = type === `movies` ? data.original_title : data.original_name

    const renderLanguage= (language) =>{
        switch(language){
            case 'en':
                return <GB title="Great Britain" className='language-flag'/>
            case 'it':
                return <IT title="Great Britain" className='language-flag'/>
            case 'ja':
                return <FP title="Great Britain" className='language-flag'/>
            case 'es':
                return <ES title="Great Britain" className='language-flag'/>
            case 'fr':
                return <FR title="Great Britain" className='language-flag'/>
            case 'ro':
                return <RO title="Great Britain" className='language-flag'/>
            default:
                return <span>{language}</span>
        }
    }

    // const renderVote = (vote) =>{
    //     const rating = Math.ceil(vote / 2)
    //     const stars = []
    //     for(let i=1; i<=5; i++){
    //         stars.push(
    //             i <= rating ? (

    //             )
    //         )
    //     }

    // }

    return(
        <>
           <li>
                <img src={`https:image.tmdb.org/t/pw342${data.poster_path}`} alt={title} />

                <div>
                    <h3>{title}</h3>
                    <p>
                        Original: {originalTitle}
                    </p>
                    <p>
                        lingua: {renderLanguage(data.original_language)}
                    </p>
                    <p>
                        Voto: <span>{renderVote(data.vote_average)}</span>
                    </p>
                </div>
            </li> 
        </>
    )
} 