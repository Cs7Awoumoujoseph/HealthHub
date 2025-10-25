function Header() {
  return (
    <header className="top-header">
      <div className="app-title">
        <img src="images/HealthHub.png" alt="HealthHub" className="HealthHub" />
        <h2 style={{ fontFamily: "segoe UI", color: "#268da7" }}>
          HealtHHub Assurance
        </h2>
      </div>
      <input
        type="text"
        placeholder="Vouss recherchez quelque chose ?"
        className="search-input"
      />
    </header>
  );
}
export default Header;
