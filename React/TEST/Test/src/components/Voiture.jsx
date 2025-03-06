import './Voiture.css'; 

function Voiture({prop}) {
    return (
        <div className="voiture-card">
            <h2>{prop.marque} {prop.model}</h2>
            <p><strong>Couleur :</strong> {prop.couleur}</p>
            <p><strong>Année :</strong> {prop.annee}</p>
        </div>
    );
}

export default Voiture;