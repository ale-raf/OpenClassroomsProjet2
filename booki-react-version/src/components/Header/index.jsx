import { HashLink } from "react-router-hash-link";
import logo from "../../assets/images/logo/Booki.png";
import "../../styles/Header.scss";

export default function Header() {
    return(
        <header className="header">
            <img src={logo} className="booki" alt="Booki"/>
            <nav>
                <ul className="menu">
                    <li>
                        <HashLink to="/#hébergements">Hébergements</HashLink>
                    </li>
                    <li>
                        <HashLink to="/#activités">Activités</HashLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}