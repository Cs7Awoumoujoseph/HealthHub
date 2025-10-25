import "./internalAnGlobalStyle/myAccount.css";
function MyAccount({ activeTab }) {
  return (
    activeTab === "Mon Compte" && (
      <div className="laura">
        <header>
          <div className="container">
            <h1>
              <i className="fas fa-user-shield"></i> Mon Espace Assuré
            </h1>
            <p className="subtitle">
              Gérez votre compte et accédez à vos services en toute sécurité
            </p>
          </div>
        </header>

        <div className="container">
          <div className="auth-container">
            <div className="auth-card">
              <h2 className="auth-title">
                <i className="fas fa-user-plus"></i> Création de compte
              </h2>

              <form id="signup-form">
                <div className="form-group">
                  <label for="lastname">Nom</label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="form-group">
                  <label for="firstname">Prénom</label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="Votre prénom"
                    required
                  />
                </div>

                <div className="form-group">
                  <label for="birthdate">Date de naissance</label>
                  <input type="date" id="birthdate" required />
                </div>

                <div className="form-group">
                  <label for="email">Adresse e-mail</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="email@exemple.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label for="phone">Numéro de téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="06 12 34 56 78"
                    required
                  />
                </div>

                <div className="form-group">
                  <label for="contract">Numéro de contrat</label>
                  <input
                    type="text"
                    id="contract"
                    placeholder="Votre numéro de contrat"
                    required
                  />
                </div>

                <div className="form-group">
                  <label for="password">Mot de passe</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Créez un mot de passe sécurisé"
                    required
                  />
                  <small style={{ color: "var(--gray-color)" }}>
                    Minimum 8 caractères avec chiffres et caractères spéciaux
                  </small>
                </div>

                <div className="form-group">
                  <label for="confirm-password">
                    Confirmez le mot de passe
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="Retapez votre mot de passe"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-block">
                  Créer mon compte
                </button>
              </form>

              <p
                style={{
                  textAlign: "center",
                  marginTop: "1rem",
                  color: "var(--gray-color)",
                }}
              >
                Un code d'activation vous sera envoyé par SMS ou e-mail pour
                valider votre compte.
              </p>
            </div>

            {/* <!-- Connexion --> */}
            <div className="auth-card">
              <h2 className="auth-title">
                <i className="fas fa-sign-in-alt"></i> Connexion
              </h2>

              <form id="login-form">
                <div className="form-group">
                  <label for="login-id">Identifiant</label>
                  <input
                    type="text"
                    id="login-id"
                    placeholder="Email, téléphone ou numéro de contrat"
                    required
                  />
                </div>

                <div className="form-group">
                  <label for="login-password">Mot de passe</label>
                  <input
                    type="password"
                    id="login-password"
                    placeholder="Votre mot de passe"
                    required
                  />
                  <div style={{ textAlign: "right", marginTop: "5px" }}>
                    <a
                      href="#"
                      style={{
                        color: "var(--primary-color)",
                        fontSize: "0.9rem",
                      }}
                    >
                      Mot de passe oublié ?
                    </a>
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    {" "}
                    <input type="checkbox" /> Se souvenir de moi{" "}
                  </label>
                </div>

                <button type="submit" className="btn btn-block">
                  Se connecter
                </button>
              </form>

              <div className="divider">
                <span className="divider-text">ou</span>
              </div>

              <button
                className="btn btn-block"
                style={{ backgroundColor: "#4285f4", marginBottom: "10px" }}
              >
                <i className="fab fa-google"></i> Continuer avec Google
              </button>
              <button
                className="btn btn-block"
                style={{ backgroundColor: "#3b5998" }}
              >
                <i className="fab fa-facebook-f"></i> Continuer avec Facebook
              </button>

              <div
                id="2fa-section"
                style={{ display: "none", marginTop: "1.5rem" }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "1rem",
                    color: "var(--primary-color)",
                  }}
                >
                  <i className="fas fa-mobile-alt"></i> Authentification à deux
                  facteurs
                </h3>
                <p style={{ color: "var(--gray-color)", marginBottom: "1rem" }}>
                  Un code de vérification a été envoyé à votre numéro de
                  téléphone enregistré.
                </p>
                <div className="form-group">
                  <label for="2fa-code">Code de vérification</label>
                  <input
                    type="text"
                    id="2fa-code"
                    placeholder="Entrez le code à 6 chiffres"
                    maxlength="6"
                  />
                </div>
                <button className="btn btn-block">Vérifier</button>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "1rem",
                    color: "var(--gray-color)",
                    fontSize: "0.9rem",
                  }}
                >
                  <a href="#" style={{ color: "var(--primary-color)" }}>
                    Renvoyer le code
                  </a>
                  |
                  <a href="#" style={{ color: "var(--primary-color)" }}>
                    Utiliser une autre méthode
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Fonctionnalités du compte --> */}
          <h2
            style={{
              color: "var(--primary-color)",
              marginTop: "3rem",
              borderBottom: "2px solid var(--light-color)",
              paddingBottom: "10px",
            }}
          >
            <i className="fas fa-cog"></i> Gestion de votre compte
          </h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-key"></i>
              </div>
              <h3 className="feature-title">Sécurité du compte</h3>
              <p>
                Modifiez votre mot de passe, activez la double authentification
                et consultez les activités récentes sur votre compte.
              </p>
              <span className="security-badge">
                <i className="fas fa-shield-alt"></i> Sécurité renforcée
              </span>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-bell"></i>
              </div>
              <h3 className="feature-title">Préférences de notification</h3>
              <p>
                Choisissez comment vous souhaitez recevoir les alertes et
                notifications (SMS, email, notifications push).
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="feature-title">Application mobile</h3>
              <p>
                Téléchargez notre application pour accéder à votre espace assuré
                depuis votre smartphone.
              </p>
              <div style={{ marginTop: "1rem" }}>
                <img
                  src="https://via.placeholder.com/120x40?text=App+Store"
                  alt="App Store"
                  style={{ height: "40px", marginRight: "10px" }}
                />
                <img
                  src="https://via.placeholder.com/120x40?text=Google+Play"
                  alt="Google Play"
                  style={{ height: "40px" }}
                />
              </div>
            </div>
          </div>

          {/* <!-- Section de gestion du compte --> */}
          <div className="tab-container">
            <div className="tabs">
              <div className="tab active" data-tab="profile">
                Profil
              </div>
              <div className="tab" data-tab="security">
                Sécurité
              </div>
              <div className="tab" data-tab="notifications">
                Notifications
              </div>
              <div className="tab" data-tab="activity">
                Activité
              </div>
            </div>

            <div className="tab-content active" id="profile-tab">
              <form>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <div className="form-group">
                    <label for="profile-lastname">Nom</label>
                    <input type="text" id="profile-lastname" value="Dupont" />
                  </div>
                  <div className="form-group">
                    <label for="profile-firstname">Prénom</label>
                    <input type="text" id="profile-firstname" value="Jean" />
                  </div>
                </div>

                <div className="form-group">
                  <label for="profile-email">Adresse e-mail</label>
                  <input
                    type="email"
                    id="profile-email"
                    value="jean.dupont@exemple.com"
                  />
                </div>

                <div className="form-group">
                  <label for="profile-phone">Numéro de téléphone</label>
                  <input type="tel" id="profile-phone" value="06 12 34 56 78" />
                </div>

                <div className="form-group">
                  <label for="profile-contract">Numéro de contrat</label>
                  <input
                    type="text"
                    id="profile-contract"
                    value="CONT-123456789"
                    disabled
                  />
                </div>

                <button type="submit" className="btn">
                  Mettre à jour le profil
                </button>
              </form>
            </div>

            <div className="tab-content" id="security-tab">
              <div className="alert-banner">
                <i className="fas fa-exclamation-triangle"></i>
                <div>
                  Dernière connexion depuis un nouvel appareil le 15/06/2023 à
                  14:32 (Paris, France)
                </div>
              </div>

              <h3
                style={{ marginBottom: "1rem", color: "var(--primary-color)" }}
              >
                <i className="fas fa-key"></i> Mot de passe
              </h3>
              <button className="btn" style={{ marginBottom: "2rem" }}>
                Modifier mon mot de passe
              </button>

              <h3
                style={{ marginBottom: "1rem", color: "var(--primary-color)" }}
              >
                <i className="fas fa-lock"></i> Authentification à deux facteurs
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <strong>Double authentification par SMS</strong>
                  <p style={{ color: "var(--gray-color); margin-top: 5px" }}>
                    Activée sur le numéro +33 6 12 34 56 78
                  </p>
                </div>
                <label className="switch">
                  <input type="checkbox" checked />
                  <span className="slider round"></span>
                </label>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <strong>Application d'authentification</strong>
                  <p style={{ color: "var(--gray-color); margin-top: 5px" }}>
                    Non configurée
                  </p>
                </div>
                <button className="btn">Configurer</button>
              </div>
            </div>

            <div className="tab-content" id="notifications-tab">
              <h3
                style={{ marginBottom: "1rem", color: "var(--primary-color)" }}
              >
                <i className="fas fa-envelope"></i> Préférences de notification
              </h3>

              <div style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <strong>Notifications par e-mail</strong>
                    <p style={{ color: "var(--gray-color); margin-top: 5px" }}>
                      Recevoir les alertes et rappels par e-mail
                    </p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <strong>Notifications par SMS</strong>
                    <p style={{ color: "var(--gray-color)", marginTop: "5px" }}>
                      Recevoir les alertes importantes par SMS
                    </p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <strong>Notifications push</strong>
                    <p style={{ color: "var(--gray-color)", marginTop: "5px" }}>
                      Recevoir des notifications sur l'application mobile
                    </p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>

              <h3
                style={{ marginBottom: "1rem", color: "var(--primary-color)" }}
              >
                <i className="fas fa-bell"></i> Dernières notifications
              </h3>

              <div
                style={{
                  background: "white",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div className="notification-item">
                  <div className="notification-icon">
                    <i className="fas fa-file-invoice-dollar"></i>
                  </div>
                  <div>
                    <strong>Remboursement traité</strong>
                    <p
                      style={{
                        color: "var(--gray-color)",
                        marginTop: "5px",
                        fontSize: "0.9rem",
                      }}
                    >
                      Votre demande de remboursement #REM-45678 a été traitée.
                    </p>
                    <p
                      style={{ color: "var(--gray-color)", fontSize: "0.8rem" }}
                    >
                      15/06/2023 à 10:15
                    </p>
                  </div>
                </div>
                <div className="notification-item">
                  <div className="notification-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div>
                    <strong>Connexion détectée</strong>
                    <p
                      style={{
                        color: "var(--gray-color)",
                        marginTop: "5px",
                        fontSize: "0.9rem",
                      }}
                    >
                      Nouvelle connexion depuis un appareil inconnu.
                    </p>
                    <p
                      style={{ color: "var(--gray-color)", fontSize: "0.8rem" }}
                    >
                      14/06/2023 à 18:30
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-content" id="activity-tab">
              <h3
                style={{ marginBottom: "1rem", color: "var(--primary-color)" }}
              >
                <i className="fas fa-history"></i> Historique des connexions
              </h3>

              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Heure</th>
                    <th>Appareil</th>
                    <th>Localisation</th>
                    <th>Statut</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15/06/2023</td>
                    <td>14:32</td>
                    <td>Chrome (Windows)</td>
                    <td>Paris, France</td>
                    <td>
                      <span className="status status-approved">Réussi</span>
                    </td>
                  </tr>
                  <tr>
                    <td>14/06/2023</td>
                    <td>18:30</td>
                    <td>Safari (iPhone)</td>
                    <td>Lyon, France</td>
                    <td>
                      <span className="status status-approved">Réussi</span>
                    </td>
                  </tr>
                  <tr>
                    <td>12/06/2023</td>
                    <td>09:15</td>
                    <td>App Mobile (Android)</td>
                    <td>Marseille, France</td>
                    <td>
                      <span className="status status-approved">Réussi</span>
                    </td>
                  </tr>
                  <tr>
                    <td>10/06/2023</td>
                    <td>22:45</td>
                    <td>Firefox (Mac)</td>
                    <td>New York, USA</td>
                    <td>
                      <span className="status status-rejected">Bloqué</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <footer>
            <p>© 2023 Mon Assurance Santé | Tous droits réservés</p>
            <p style={{ marginTop: "1rem" }}>
              <a
                href="#"
                style={{ color: "var(--primary-color)", margin: "0 10px" }}
              >
                Conditions générales
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
                Aide
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
export default MyAccount;
