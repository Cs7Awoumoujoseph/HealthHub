function AddContract({ overlay, setOverlay }) {
  return (
    overlay && (
      <main className="add-contract-overlay">
        <div className="add-contract-modal">
          <h2 className="modal-title">Ajouter un contrat</h2>

          <form className="add-contract-form">
            <label>
              Nom du contrat
              <input
                type="text"
                className="modal-input"
                placeholder="Ex: Mutuelle Famille +"
              />
            </label>

            <label>
              Type de contrat
              <select className="modal-select">
                <option>Santé</option>
                <option>Dentaire</option>
                <option>Hospitalisation</option>
              </select>
            </label>

            <label>
              Date de début
              <input type="date" className="modal-input" />
            </label>

            <label>
              Statut
              <select className="modal-select">
                <option>Actif</option>
                <option>Résilié</option>
              </select>
            </label>

            <div className="modal-buttons">
              <button
                type="button"
                className="modal-cancel"
                onClick={() => setOverlay(false)}
              >
                Annuler
              </button>
              <button type="submit" className="modal-submit">
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </main>
    )
  );
}
export default AddContract;
