import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Card({ article, cover, title, price }) {
    const stars = [1, 2, 3, 4, 5];
    return (
        <article className={article}>
            <div className={cover}></div>
            <h2>{title}</h2>
            <p>{price}</p>
            <span>
                {stars.map((star) => (
                    <FontAwesomeIcon className="star" key={star} icon={faStar}/>
                ))}
            </span>
        </article>
    )
}