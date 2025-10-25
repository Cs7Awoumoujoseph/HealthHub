import "./internalAnGlobalStyle/StyleTraitementRemb.css";

function TraitementRemboursement({ activeTab }) {
  return (
    activeTab === "Mes bénéficiaires" && (
      <div className="Orli">
        <header>
          <div className="container">
            <h1>
              <i className="fas fa-file-invoice-dollar"></i> Traitement des
              Remboursements
            </h1>
            <p className="subtitle">
              Gestion automatisée et transparente de vos demandes
            </p>
          </div>
        </header>

        <div className="container">
          <div className="stats-cards">
            <div className="stat-card">
              <div className="stat-value">24h</div>
              <div className="stat-label">Traitement moyen</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">98%</div>
              <div className="stat-label">Taux de satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">1.2k</div>
              <div className="stat-label">Demandes/mois</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">3j</div>
              <div className="stat-label">Paiement moyen</div>
            </div>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-title">
                <i className="fas fa-inbox"></i> Réception des Demandes
              </div>
              <p>Les demandes de remboursement peuvent être soumises via :</p>
              <ul>
                <li>
                  <i className="fas fa-laptop"></i> Le portail en ligne dédié
                </li>
                <li>
                  <i className="fas fa-envelope"></i> Email à
                  remboursements@entreprise.com
                </li>
                <li>
                  <i className="fas fa-building"></i> Dépôt physique au service
                  comptabilité
                </li>
              </ul>

              <div className="requirements">
                <strong>
                  <i className="fas fa-clipboard-list"></i> Informations
                  requises :
                </strong>
                <ul>
                  <li>Formulaire de demande complété</li>
                  <li>Pièces justificatives (factures, reçus)</li>
                  <li>Numéro de compte bancaire</li>
                  <li>Référence du projet/dossier</li>
                </ul>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-title">
                <i className="fas fa-robot"></i> Contrôle Automatique
              </div>
              <p>Notre système intelligent vérifie automatiquement :</p>
              <ul>
                <li>
                  <i className="fas fa-check-circle"></i> Complétude des
                  documents
                </li>
                <li>
                  <i className="fas fa-euro-sign"></i> Montants et devises
                </li>
                <li>
                  <i className="fas fa-calendar-alt"></i> Dates des dépenses
                </li>
                <li>
                  <i className="fas fa-shield-alt"></i> Détection des anomalies
                </li>
              </ul>

              <p>
                <strong>Technologies utilisées :</strong>
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <span
                  style={{
                    background: "#e3f2fd",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                  }}
                >
                  <i className="fas fa-eye"></i> OCR
                </span>
                <span
                  style={{
                    background: "#e3f2fd",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                  }}
                >
                  <i className="fas fa-brain"></i> Intelligence Artificielle
                </span>
                <span
                  style={{
                    background: "#e3f2fd",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                  }}
                >
                  <i className="fas fa-database"></i> Intégration ERP
                </span>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-title">
                <i className="fas fa-clipboard-check"></i> Validation Finale
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Statut</th>
                    <th>Description</th>
                    <th>Délai</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="status status-approved">
                        <i className="fas fa-check"></i> Validé
                      </span>
                    </td>
                    <td>Demande complète et conforme</td>
                    <td>2-3 jours</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="status status-rejected">
                        <i className="fas fa-times"></i> Rejeté
                      </span>
                    </td>
                    <td>Critères non respectés</td>
                    <td>3-5 jours</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="status status-info-needed">
                        <i className="fas fa-info-circle"></i> Complément
                      </span>
                    </td>
                    <td>Documents manquants</td>
                    <td>5-7 jours</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="status status-pending">
                        <i className="fas fa-clock"></i> En Attente
                      </span>
                    </td>
                    <td>En cours de traitement</td>
                    <td>Variable</td>
                  </tr>
                </tbody>
              </table>

              <h3 style={{ marginTop: "20px" }}>
                <i className="fas fa-user-check"></i> Validation Manuelle
              </h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">Étape 1</div>
                    <p>Assignation à un agent qualifié</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">Étape 2</div>
                    <p>Vérification approfondie des documents</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">Étape 3</div>
                    <p>Consultation des règles applicables</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">Étape 4</div>
                    <p>Décision finale et notification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tracking-section">
            <h2>
              <i className="fas fa-search"></i> Suivi des Demandes
            </h2>
            <p>
              Entrez votre numéro de dossier pour connaître l'état de votre
              remboursement :
            </p>

            <div className="tracking-form">
              <input
                type="text"
                className="tracking-input"
                placeholder="Votre numéro de dossier (ex: REMB-2023-XXXXX)"
              />
              <button className="tracking-btn">
                <i className="fas fa-search"></i> Rechercher
              </button>
            </div>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
              }}
            >
              <div style={{ flex: 1, minWidth: "200px" }}>
                <h3>
                  <i className="fas fa-mobile-alt"></i> Options de suivi
                </h3>
                <ul>
                  <li>
                    <i className="fas fa-portrait"></i> Application mobile
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i> Alertes email
                  </li>
                  <li>
                    <i className="fas fa-phone"></i> Service client
                  </li>
                </ul>
              </div>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <h3>
                  <i className="fas fa-question-circle"></i> Besoin d'aide ?
                </h3>
                <ul>
                  <li>
                    <i className="fas fa-phone"></i> 01 23 45 67 89
                  </li>
                  <li>
                    <i className="fas fa-comments"></i> Chat en direct
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>{" "}
                    support@remboursements.com
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="faq-section">
            <h2>
              <i className="fas fa-question-circle"></i> Foire aux Questions
            </h2>

            <div className="faq-item">
              <div className="faq-question">
                <span>Quels documents sont acceptés comme justificatifs ?</span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>
                  Nous acceptons les factures, reçus, tickets de caisse, notes
                  de frais signées, et tout document officiel mentionnant
                  clairement le montant, la date et la nature de la dépense. Les
                  documents doivent être lisibles et complets.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>
                  Quel est le délai maximum pour soumettre une demande ?
                </span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>
                  Les demandes doivent être soumises dans un délai maximum de 3
                  mois après la date de la dépense. Passé ce délai, les
                  remboursements ne pourront plus être pris en compte.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>Comment contester un rejet de demande ?</span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>
                  Vous pouvez faire une réclamation par email à
                  reclamation@remboursements.com en précisant votre numéro de
                  dossier et en joignant les éventuels documents
                  complémentaires. Notre service traitera votre demande sous 5
                  jours ouvrés.
                </p>
              </div>
            </div>
          </div>

          <footer>
            <p>
              © 2023 Système de Gestion des Remboursements | Tous droits
              réservés
            </p>
            <p>
              <a
                href="#"
                style={{ color: "var(--primary-color)", margin: "0 10px" }}
              >
                Mentions légales
              </a>
              <a
                href="#"
                style={{ color: "var(--primary-color)", margin: "0 10px" }}
              >
                Confidentialité
              </a>
              <a
                href="#"
                style={{ color: "var(--primary-color)", margin: "0 10px" }}
              >
                Contact
              </a>
            </p>
          </footer>
        </div>
      </div>
    )
  );
}
export default TraitementRemboursement;
