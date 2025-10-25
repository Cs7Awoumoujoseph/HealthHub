function Remboursement({ activeTab }) {
  return (
    activeTab === "Remboursements" && (
      <main className="main" style={{ fontFamily: "Segoe UI" }}>
        <div className="header">
          <h2>Mes remboursements</h2>
          <button className="btn-primary">Faire une demande</button>
        </div>

        {/* Filtres */}
        <div className="filters">
          <button className="btn-filter">Tous</button>
          <button className="btn-filter">Année en cours</button>
          <button className="btn-filter">Type</button>
        </div>

        {/* Informations complémentaires */}
        <div className="info-cards">
          <div className="card">
            <h3>Remboursements récents</h3>
            <ul>
              <li>Consultation du 02/05/2025 : 25€, traité(e)</li>
              <li>Pharmacie du 10/04/2025 : 12,00 € en cours</li>
            </ul>
          </div>
          <div className="card">
            <h3>Notifications</h3>
            <p>Demande refusée N°xxxx</p>
            <p>Contrat actif</p>
          </div>
        </div>

        {/* Tableau */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Type de soin</th>
                <th>Montant total</th>
                <th>Remboursement</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>02/05/2025</td>
                <td>Consultation</td>
                <td>35,00 €</td>
                <td className="highlight">25,00 €</td>
                <td>
                  <span className="badge green">Validé</span>
                </td>
              </tr>
              <tr>
                <td>10/04/2025</td>
                <td>Pharmacie</td>
                <td>15,00 €</td>
                <td className="highlight">12,00 €</td>
                <td>
                  <span className="badge yellow">En cours</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    )
  );
}
export default Remboursement;
