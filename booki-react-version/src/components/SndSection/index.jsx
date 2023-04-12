import ActivitesCard from "../ActivitesCard";
import activitesList from "../../activites";
import "../../style/SndSection.scss";

export default function SndSection() {
    return (
        <section className="section-activites">
            <h2>Activités à Marseille</h2>
            {activitesList.map((card) => (
                <ActivitesCard key={card.title} title={card.title} cover={card.cover}/>
            ))}
        </section>
    )
}