import { Card } from "./Card"

export function ResultsList ({type, items}) {
    return(
        <section>
            <p>
                Risultati Trovati : {items.lenght}
            </p>

            <ul>

                {
                    items && items.lenght > 0 ? (
                        items.map( item => <Card key={item.id} data={item} type={type} /> )
                    ) : (

                        <p>Nessun Risultato</p>
                    )

                }
            </ul>
        </section>
    )
}