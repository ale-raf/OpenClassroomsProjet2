import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import '../../styles/Card.scss';

export default function HebergementsCard({ article, cover, background, info, title, price, empty_div }) {
    const stars = [1, 2, 3, 4, 5];
    return (
        <article className={article}>
            <div className={cover} style={{backgroundImage: `url(${background})`}}></div>
            <div className={info}>
                <h3>{title}</h3>
                <p>{price}</p>
                <div className={empty_div}></div>
                <span>
                    {stars.map((star) => (
                        <FontAwesomeIcon className="star" key={star} icon={faStar}/>
                    ))}
                </span>
            </div>
        </article>
    )
}