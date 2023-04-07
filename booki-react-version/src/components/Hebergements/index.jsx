import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../../style/Hebergements.scss";

export default function Hebergements({ title, price }) {
    return (
        <article className='hebergements-art'>
            <div className="cover"></div>
            <h2>{title}</h2>
            <p>{price}</p>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
        </article>
    )
}