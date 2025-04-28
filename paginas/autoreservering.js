
import React from "react";

function Reserveringsoverzicht({ reserveringen }) {
    return (
            <div>
                <h2>Reserveringen</h2>
                <ul>
                    {reserveringen.length === 0 ? (
                            <li>Er zijn momenteel geen reserveringen.</li>
                    ) : (
                            reserveringen.map((reservering, index) => (
                                    <li key={index}>
                                        {reservering.klant} heeft auto {reservering.id} gereserveerd.
                                    </li>
                            ))
                    )}
                </ul>
            </div>
    );
}

export default Reserveringsoverzicht;
