import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMoneyBillWave, faMagnifyingGlass, faPerson, faHeart, faFire, faInfo } from "@fortawesome/free-solid-svg-icons";
import '../../style/Info.scss';

export default function Info() {
    return(
        <section>
            <div className="slogan">
                <h1>Trouvez votre hébergement pour des vacances de rêve</h1>
                <p>En plein centre ville ou en pleine nature</p>
            </div>
            <div className="div-form">
                <form className="form">
                    <span className="location-icon"><FontAwesomeIcon icon={faLocationDot}/></span>
                    <input className="search" type="search" name="search" value="Marseille, France"/>
                    <input className="submit" type="submit" name="submit" value="Rechercher"/>
                    <button className="submit-mobile"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                </form>
            </div>
            <div className="filters">
                <h2>Filtres</h2>
                <div className="filter eco">
                    <FontAwesomeIcon className="icon" icon={faMoneyBillWave}/>
                    <h3>Economique</h3>
                </div>
                <div className="filter familial">
                    <FontAwesomeIcon className="icon" icon={faPerson}/>
                    <h3>Familial</h3>
                </div>
                <div className="filter romantic">
                    <FontAwesomeIcon className="icon" icon={faHeart}/>
                    <h3>Romantique</h3>
                </div>
                <div className="filter fire">
                    <FontAwesomeIcon className="icon" icon={faFire}/>
                    <h3>Nos pépites</h3>
                </div>
            </div>
            <div className="available">
                <span className="info-icon"><FontAwesomeIcon icon={faInfo}/></span>
                <p>Plus de 500 logements sont disponibles dans cette ville</p>
            </div>
        </section>
    )
}