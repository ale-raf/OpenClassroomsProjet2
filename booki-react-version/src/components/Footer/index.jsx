import '../../styles/Footer.scss';

export default function Footer() {
    return (
        <footer>
            <div className='footer-div'>
                <h2>A propos</h2>
                <p>Fonctionnement du site</p>
                <p>Conditions générales</p>
                <p>Données et confidentialité</p>
            </div>
            <div className='footer-div'>
                <h2>Nos hébergements</h2>
                <p>Charte qualité</p>
                <p>Proposer votre hôtel</p>
            </div>
            <div className='footer-div'>
                <h2>Assistance</h2>
                <p>Centre d'aide</p>
                <p>Nous contacter</p>
            </div>
        </footer>
    )
}