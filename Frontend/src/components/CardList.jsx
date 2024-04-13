import { Card } from './Card'

export function CardList({ gameArray}) {
    return (
        <div className='CardList'>
            {gameArray.map((game, index) => {
                return <Card key={index} game={game}/>
            })}
        </div>
    );
}