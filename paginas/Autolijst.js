import React, { useState } from "react";
import AutoLijst from "./Autolijst";
import AutoFormulier from "./AutoFormulier";
import Reserveringsoverzicht from "./autoreservering";
import '/App.css';

function App() {
    const [autoReserveringen, setAutoReserveringen] = useState([]);
    const [autoVoorraad, setAutoVoorraad] = useState([
        { id: 1, merk: "Volkswagen", model: "Golf", prijsPerDag: 30 },
        { id: 2, merk: "Tesla", model: "Model 3", prijsPerDag: 70 },
        { id: 3, merk: "Ford", model: "Fiesta", prijsPerDag: 40 },
    ]);

    const reserveerAuto = (auto) => {
        setAutoReserveringen([...autoReserveringen, auto]);
    };

    return (
            <div className="App">
                <h1>Verhuurauto's</h1>
                <AutoLijst auto's={autoVoorraad} reserveerAuto={reserveerAuto} />
      <AutoFormulier reserveerAuto={reserveerAuto} />
      <Reserveringsoverzicht reserveringen={autoReserveringen} />
    </div>
  );
}

export default App;