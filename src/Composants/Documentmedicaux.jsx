import "./internalAnGlobalStyle/StyleDocMed.css";

function Documentmedicaux({ activeTab }) {
  return (
    activeTab === "Documents Medicaux" && (
      <div className="Orlia">
        <header>
          <div className="header-container">
            <div className="logo">
              Mon<span>Espace</span>Santé
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#">
                    <i className="fas fa-home"></i> Accueil
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-file-medical"></i> Documents
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-envelope"></i> Courriers
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-user"></i> Mon compte
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="container">
          <h1 className="page-title ">
            <i className="fas fa-file-medical"></i> Gestion des documents
            médicaux
          </h1>

          <div className="card ">
            <h2 className="card-title">
              <i className="fas fa-upload"></i> Télécharger un nouveau document
            </h2>
            <div className="upload-section">
              <div className="upload-icon">
                <i className="fas fa-cloud-upload-alt"></i>
              </div>
              <p>
                Glissez-déposez vos fichiers ici ou cliquez pour sélectionner
              </p>
              <p
                style={{
                  marginTop: "0.5rem",
                  fontSize: "0.9rem",
                  color: "#7f8c8d",
                }}
              >
                Formats acceptés : PDF, JPG, PNG (max. 10MB)
              </p>
              <button className="btn" style={{ marginTop: "1.5rem" }}>
                <i className="fas fa-folder-open"></i> Sélectionner des fichiers
              </button>
            </div>
            <p style={{ marginTop: "1rem", color: "#7f8c8d" }}>
              <i className="fas fa-lock"></i> Vos documents sont automatiquement
              classNameifiés et stockés de manière sécurisée.
            </p>
          </div>

          <div className="card ">
            <h2 className="card-title">
              <i className="fas fa-folder"></i> Mes documents médicaux
            </h2>
            <div className="document-list">
              <div className="document-item">
                <div className="document-icon">
                  <i className="fas fa-file-prescription"></i>
                </div>
                <div className="document-info">
                  <div className="document-name">Ordonnance - Dr. Martin</div>
                  <div className="document-type">Ordonnance médicale</div>
                  <div className="document-date">
                    <i className="far fa-calendar-alt"></i> Ajouté le 15/05/2023
                  </div>
                </div>
                <div className="document-actions">
                  <button className="btn btn-outline" title="Voir">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn btn-outline" title="Télécharger">
                    <i className="fas fa-download"></i>
                  </button>
                </div>
              </div>

              <div className="document-item">
                <div className="document-icon">
                  <i className="fas fa-file-prescription"></i>
                </div>
                <div className="document-info">
                  <div className="document-name">Ordonnance - Dr. Martin</div>
                  <div className="document-type">Ordonnance médicale</div>
                  <div className="document-date">
                    <i className="far fa-calendar-alt"></i> Ajouté le 15/05/2023
                  </div>
                </div>
                <div className="document-actions">
                  <button className="btn btn-outline" title="Voir">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn btn-outline" title="Télécharger">
                    <i className="fas fa-download"></i>
                  </button>
                </div>
              </div>
              <div className="document-item">
                <div className="document-icon">
                  <i className="fas fa-file-prescription"></i>
                </div>
                <div className="document-info">
                  <div className="document-name">Ordonnance - Dr. Martin</div>
                  <div className="document-type">Ordonnance médicale</div>
                  <div className="document-date">
                    <i className="far fa-calendar-alt"></i> Ajouté le 15/05/2023
                  </div>
                </div>
                <div className="document-actions">
                  <button className="btn btn-outline" title="Voir">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn btn-outline" title="Télécharger">
                    <i className="fas fa-download"></i>
                  </button>
                </div>
              </div>

              <div className="document-item">
                <div className="document-icon">
                  <i className="fas fa-file-medical-alt"></i>
                </div>
                <div className="document-info">
                  <div className="document-name">Radiologie - Genou droit</div>
                  <div className="document-type">Rapport médical</div>
                  <div className="document-date">
                    <i className="far fa-calendar-alt"></i> Ajouté le 10/05/2023
                  </div>
                </div>
                <div className="document-actions">
                  <button className="btn btn-outline" title="Voir">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn btn-outline" title="Télécharger">
                    <i className="fas fa-download"></i>
                  </button>
                </div>
              </div>

              <div className="document-item">
                <div className="document-icon">
                  <i className="fas fa-file-invoice"></i>
                </div>
                <div className="document-info">
                  <div className="document-name">Facture - Laboratoire</div>
                  <div className="document-type">Facture</div>
                  <div className="document-date">
                    <i className="far fa-calendar-alt"></i> Ajouté le 05/05/2023
                  </div>
                </div>
                <div className="document-actions">
                  <button className="btn btn-outline" title="Voir">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn btn-outline" title="Télécharger">
                    <i className="fas fa-download"></i>
                  </button>
                </div>
              </div>

              <div className="document-item">
                <div className="document-icon">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <div className="document-info">
                  <div className="document-name">Analyse sanguine</div>
                  <div className="document-type">Résultats d'analyse</div>
                  <div className="document-date">
                    <i className="far fa-calendar-alt"></i> Ajouté le 28/04/2023
                  </div>
                </div>
                <div className="document-actions">
                  <button className="btn btn-outline" title="Voir">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn btn-outline" title="Télécharger">
                    <i className="fas fa-download"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          <div className="card ">
            <h2 className="card-title">
              <i className="fas fa-envelope"></i> Génération de courriers
            </h2>
            <p>
              Générez automatiquement des courriers médicaux à partir de vos
              documents stockés.
            </p>

            <div
              style={{
                margin: "2rem 0",
                display: "flex",
                gap: "1.2rem",
                flexWrap: "wrap",
              }}
            >
              <button className="btn">
                <i className="fas fa-file-invoice-dollar"></i> Lettre de
                remboursement
              </button>
              <button className="btn">
                <i className="fas fa-procedures"></i> Notification de prise en
                charge
              </button>
              <button className="btn">
                <i className="fas fa-user-md"></i> Demande de rendez-vous
              </button>
            </div>

            <h3
              style={{
                marginTop: "2rem",
                color: "var(--primary-color)",
                fontSize: "1.3rem",
                position: "relative",
                paddingBottom: "0.5rem",
              }}
            >
              <i className="fas fa-history"></i> Courriers générés récemment
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "40px",
                  height: "3px",
                  backgroundColor: "var(--secondary-color)",
                  borderRadius: "3px",
                }}
              ></span>
            </h3>
            <div className="document-list">
              <div className="document-item">
                <div className="document-icon">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <div className="document-info">
                  <div className="document-name">Demande de remboursement</div>
                  <div className="document-type">Lettre pour mutuelle</div>
                  <div className="document-date">
                    <i className="far fa-calendar-alt"></i> Généré le 12/05/2023
                  </div>
                </div>
                <div className="document-actions">
                  <button className="btn btn-outline" title="Voir">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn btn-outline" title="Imprimer">
                    <i className="fas fa-print"></i>
                  </button>
                </div>
              </div>

              <div className="document-item">
                <div className="document-icon">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <div className="document-info">
                  <div className="document-name">Autorisation de soins</div>
                  <div className="document-type">Document administratif</div>
                  <div className="document-date">
                    <i className="far fa-calendar-alt"></i> Généré le 08/05/2023
                  </div>
                </div>
                <div className="document-actions">
                  <button className="btn btn-outline" title="Voir">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="btn btn-outline" title="Imprimer">
                    <i className="fas fa-print"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          <div className="card ">
            <h2 className="card-title">
              <i className="fas fa-info-circle"></i> Fonctionnalités et
              avantages
            </h2>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="feature-title">Archivage sécurisé</h3>
                <p>
                  Stockage crypté de vos documents avec accès sécurisé et
                  authentification forte.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <h3 className="feature-title">
                  classNameification automatique
                </h3>
                <p>
                  Nos algorithmes classNameent automatiquement vos documents
                  dans les bonnes catégories.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <h3 className="feature-title">Gain de temps</h3>
                <p>
                  Générez en un clic les courriers administratifs récurrents.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-comments"></i>
                </div>
                <h3 className="feature-title">Communication améliorée</h3>
                <p>
                  Partagez facilement vos documents avec les professionnels de
                  santé.
                </p>
              </div>
            </div>
          </div>

          <div className="card ">
            <h2 className="card-title">
              <i className="fas fa-cogs"></i> Technologies utilisées
            </h2>
            <p>
              Notre plateforme utilise les technologies les plus avancées pour
              garantir sécurité et performance :
            </p>

            <div className="tech-badges">
              <span className="badge badge-primary">
                <i className="fas fa-database"></i> Amazon S3
              </span>
              <span className="badge badge-primary">
                <i className="fas fa-cloud"></i> Google Cloud Storage
              </span>
              <span className="badge badge-accent">
                <i className="fas fa-file-alt"></i> Alfresco
              </span>
              <span className="badge badge-accent">
                <i className="fas fa-archive"></i> Documentum
              </span>
              <span className="badge badge-success">
                <i className="fas fa-lock"></i> Chiffrement AES-256
              </span>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer-container">
            <div className="footer-links">
              <a href="#">
                <i className="fas fa-lock"></i> Confidentialité
              </a>
              <a href="#">
                <i className="fas fa-file-contract"></i> Conditions
                d'utilisation
              </a>
              <a href="#">
                <i className="fas fa-question-circle"></i> Aide
              </a>
              <a href="#">
                <i className="fas fa-envelope"></i> Contact
              </a>
            </div>
            <p className="copyright">
              © 2023 MonEspaceSanté. Tous droits réservés.
            </p>
            <p className="certification">
              <i className="fas fa-check-circle"></i> Plateforme certifiée HDS
              (Hébergement de Données de Santé)
            </p>
          </div>
        </footer>
      </div>
    )
  );
}
export default Documentmedicaux;
