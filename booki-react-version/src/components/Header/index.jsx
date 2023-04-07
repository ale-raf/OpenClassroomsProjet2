import logo from "../../assets/images/logo/Booki.png";
import "../../style/Header.scss";

export default function Header() {
    return(
        <header className="header">
            <img src={logo} className="booki" alt="Booki"/>
            <nav>
                <ul className="menu">
                    <li><a href="#hébergements">Hébergements</a></li>
                    <li><a href="#activités">Activités</a></li>
                </ul>
            </nav>
        </header>
    )
}