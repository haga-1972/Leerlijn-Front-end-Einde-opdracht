import React from "react";
function AutoLijst({ auto's, reserveerAuto }) {
                       return (
 <div>
            <h2>Beschikbare Auto's</h2>
            <ul>
                {auto's.map((auto) => (
                    <li key={auto.id}>
                {auto.merk} {auto.model} - €{auto.prijsPerDag} per dag
                    <button onClick={() => reserveerAuto(auto)}>Reserveer</button>
                    </li>
                    ))}
            </ul>
 </div>
);
}

export default AutoLijst;
AutoFormulier.js
In dit formulier kunnen gebruikers een auto reserveren door hun naam en een datum in te vullen

import React, { useState } from "react";

function AutoFormulier({ reserveerAuto }) {
    const [naam, setNaam] = useState("");
    const [autoId, setAutoId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const auto = { id: autoId, klant: naam };
        reserveerAuto(auto);
    };

    return (
            <div>
                <h2>Reserveer een Auto</h2>
                <form onSubmit={handleSubmit}>
                    <input
                            type="text"
                            placeholder="Naam"
                            value={naam}
                            onChange={(e) => setNaam(e.target.value)}
                            required
                    />
                    <select
                            value={autoId}
                            onChange={(e) => setAutoId(e.target.value)}
                            required
                    >
                        <option value="">Kies een auto</option>
                        <option value="1">Volkswagen Golf</option>
                        <option value="2">Tesla Model 3</option>
                        <option value="3">Ford Fiesta</option>
                    </select>
                    <button type="submit">Reserveren</button>
                </form>
            </div>
    );
}

export default AutoFormulier;
