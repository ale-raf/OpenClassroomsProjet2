export default function Populaires({ title, price }) {
    return (
        <article className="populaires-art">
            <div className="cover"></div>
            <h2>{title}</h2>
            <p>{price}</p>
        </article>
    )
}