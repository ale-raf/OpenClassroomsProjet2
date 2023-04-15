import hebergementsList from '../../datas/hebergements';
import populairesList from '../../datas/populaires';
import HebergementsCard from '../HebergementsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import '../../styles/FirstSection.scss';

export default function Hebergements() {
    return (
        <section className="section-group">
            <div id="hébergements" className="hebergements">
                <h2>Hébergements à Marseille</h2>
                {hebergementsList.map((card) => (
                    <HebergementsCard key={card.title} article="hebergements-card" cover="hebergements-cover" background={card.cover} info="hebergements-info" 
                    title={card.title} price={card.price} />
                ))}
                <p>Afficher plus</p>
            </div>
            <div className="populaires">
                <div className='populaires-title'>
                    <h2>Les plus populaires</h2>
                    <span className="populaires-trend"><FontAwesomeIcon icon={faChartLine}/></span>
                </div>
                {populairesList.map((card) => (
                    <HebergementsCard key={card.title} article="populaires-card" cover="populaires-cover" background={card.cover} info="populaires-info" 
                    title={card.title} price={card.price} empty_div="populaires-empty" />
                ))}
            </div>
        </section>
    )
}