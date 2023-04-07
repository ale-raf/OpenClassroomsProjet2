import data from '../../data.json';
import populaires from '../../populaires.json';
import Card from '../Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import '../../style/FirstSection.scss';

export default function FirstSection() {
    return (
        <section className="section-group">
            <div className="hebergements">
                <h2>Hébergements à Marseille</h2>
                {data.map((card) => (
                    <Card key={card.title} article="hebergements-card" title={card.title} price={card.price} />
                ))}
                <p>Afficher plus</p>
            </div>
            <div className="populaires">
                <div className='populaires-title'>
                    <h2>Les plus populaires</h2>
                    <span className="populaires-trend"><FontAwesomeIcon icon={faChartLine}/></span>
                </div>
                {populaires.map((card) => (
                    <Card key={card.title} article="populaires-card" title={card.title} price={card.price} />
                ))}
            </div>
        </section>
    )
}