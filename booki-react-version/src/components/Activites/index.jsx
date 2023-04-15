import ActivitesCard from "../ActivitesCard";
import activitesList from "../../datas/activites";
import "../../styles/SndSection.scss";

export default function Activites() {
    return (
        <section id="activités" className="section-activites">
            <h2>Activités à Marseille</h2>
            {activitesList.map((card) => (
                <ActivitesCard key={card.title} title={card.title} cover={card.cover}/>
            ))}
        </section>
    )
}