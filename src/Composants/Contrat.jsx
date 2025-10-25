import { useState } from "react";
import AddContract from "./SousComposant/AddContract";

function Contrat({ activeTab }) {
  const [overlay, setOverlay] = useState(false);
  return (
    activeTab === "Contrats" && (
      <main className="contracts-main" style={{ fontFamily: "Segoe UI" }}>
        <div className="contracts-topbar">
          <h2 className="contracts-title">Mes contrats</h2>
          <button
            className="contracts-add-btn"
            onClick={() => setOverlay(true)}
          >
            Ajouter un contrat
          </button>
        </div>

        {/* Section Contrats Actifs */}
        <section className="contracts-section">
          <h3 className="contracts-section-title">Mes contrats actifs</h3>
          <div className="contracts-list">
            <div className="contract-card">
              <div className="contract-header">
                <h4 className="contract-title">
                  Contrat Santé – Mutuelle Essentielle
                </h4>
                <span className="contract-status actif">Actif</span>
              </div>
              <p className="contract-date">Début : 01/01/2023</p>
              <button className="contract-btn">Voir les détails</button>
            </div>
          </div>
        </section>

        {/* Section Garanties */}
        <section className="contracts-section">
          <h3 className="contracts-section-title">Mes garanties</h3>
          <div className="contracts-list">
            <div className="contract-card">
              <div className="contract-header">
                <h4 className="contract-title">Garantie Hospitalisation</h4>
              </div>
              <p className="contract-date">Prise en charge jusqu'à 100%</p>
              <button className="contract-btn">Voir les détails</button>
            </div>
            <div className="contract-card">
              <div className="contract-header">
                <h4 className="contract-title">Garantie Dentaire</h4>
              </div>
              <p className="contract-date">Remboursement jusqu’à 300€/an</p>
              <button className="contract-btn">Voir les détails</button>
            </div>
          </div>
        </section>

        {/* Section Contrats Résiliés */}
        <section className="contracts-section">
          <h3 className="contracts-section-title">Mes anciens contrats</h3>
          <div className="contracts-list">
            <div className="contract-card">
              <div className="contract-header">
                <h4 className="contract-title">
                  Contrat Dentaire – Famille Plus
                </h4>
                <span className="contract-status resilie">Résilié</span>
              </div>
              <p className="contract-date">Début : 15/06/2022</p>
              <button className="contract-btn">Voir les détails</button>
            </div>
          </div>
        </section>
        <AddContract overlay={overlay} setOverlay={setOverlay} />
      </main>
    )
  );
}

export default Contrat;
