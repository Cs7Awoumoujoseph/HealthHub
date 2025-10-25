import { useState } from "react";
import Header from "./Composants/Header";
import Sidebar from "./Composants/Sidebar";
import Remboursement from "./Composants/Remboursements";
import Contrat from "./Composants/Contrat";
import TraitementRemboursement from "./Composants/SuivisRemb";
import Documentmedicaux from "./Composants/Documentmedicaux";
import MyAccount from "./Composants/MonCompte";

function App() {
  const [activeTab, setActiveTab] = useState("Remboursements");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const remboursements = [
    {
      date: "02/05/2025",
      type: "Consultation",
      montant: "35,00 €",
      remboursement: "25,00 €",
      statut: "Traité",
    },
    {
      date: "10/04/2025",
      type: "Pharmacie",
      montant: "15,00 €",
      remboursement: "12,00 €",
      statut: "En cours",
    },
  ];

  return (
    <div>
      <Header />
      <div className="containerJ">
        <Sidebar onUpdate={handleClick} activeTab={activeTab} />
        <Remboursement activeTab={activeTab} />
        <Contrat activeTab={activeTab} onUpdate={handleClick} />
        <TraitementRemboursement activeTab={activeTab} onUpdate={handleClick} />
        <Documentmedicaux activeTab={activeTab} onUpdate={handleClick} />
        <MyAccount activeTab={activeTab} onUpdate={handleClick} />
      </div>
    </div>
  );
}

export default App;
