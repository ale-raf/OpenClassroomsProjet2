import data from '../../data.json';
import populaires from '../../populaires.json';
import Hebergements from '../Hebergements';
import Populaires from '../Populaires';
import '../../style/FirstSection.scss';

export default function FirstSection() {
    return (
        <section className="section-group">
            <div className='hebergements'>
                <h2>Hébergements à Marseille</h2>
                {data.map((card) => (
                    <Hebergements key={card.title} title={card.title} price={card.price} />
                ))}
                <p>Afficher plus</p>
            </div>
            <div>
                {populaires.map((card) => (
                    <Populaires key={card.title} title={card.title} price={card.price} />
                ))}
            </div>
        </section>
    )
}