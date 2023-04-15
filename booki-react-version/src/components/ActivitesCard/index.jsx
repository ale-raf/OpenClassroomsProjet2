import "../../styles/Activites.scss";

export default function ActivitesCard ({ title, cover }) {
    return (
        <article className="activites-card">
            <div className="activites-cover" style={{backgroundImage: `url(${cover})`}}></div>
            <div className="activites-title"><h3>{title}</h3></div>
        </article>
    )
}