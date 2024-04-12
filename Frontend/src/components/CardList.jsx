import { Card } from './Card'

export function CardList({ gameArray }) {
    return (
        <div className='CardList'>
            {gameArray.map((game, index) => {
                return <Card key={index} id={game.id} title={game.name} description={game.released} imageURL={game.background_image} price={game.reviews_count} />
            })}
        </div>
    );
}