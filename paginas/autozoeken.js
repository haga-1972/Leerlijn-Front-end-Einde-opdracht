import React, { useState } from 'react';

function SearchForm({ onSearch }) {
    const [zoekterm, setZoekterm] = useState('');
    const [startDatum, setStartDatum] = useState('');
    const [eindDatum, setEindDatum] = useState('');
    const [bedrijven, setBedrijven] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (bedrijven.length > 10) {
            alert("Je mag maximaal 10 autoverhuurbedrijven kiezen.");
            return;
        }
        onSearch({ zoekterm, startDatum, eindDatum, bedrijven });
    };

    const handleBedrijfToevoegen = (e) => {
        if (bedrijven.length < 10) {
            setBedrijven([...bedrijven, e.target.value]);
            e.target.value = '';
        }
    };

    return (
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                        type="text"
                        placeholder="Waar ben je naar op zoek? (bijv. SUV, Tesla)"
                        value={zoekterm}
                        onChange={(e) => setZoekterm(e.target.value)}
                        className="border p-2 w-full"
                        required
                />
                <div className="flex gap-2">
                    <input
                            type="date"
                            value={startDatum}
                            onChange={(e) => setStartDatum(e.target.value)}
                            className="border p-2"
                            required
                    />
                    <input
                            type="date"
                            value={eindDatum}
                            onChange={(e) => setEindDatum(e.target.value)}
                            className="border p-2"
                            required
                    />
                </div>
                <input
                        type="text"
                        placeholder="Voeg verhuurbedrijf toe"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleBedrijfToevoegen(e);
                            }
                        }}
                        className="border p-2 w-full"
                />
                <div className="text-sm text-gray-600">Geselecteerd: {bedrijven.join(', ')}</div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Zoek beste deals
                </button>
            </form>
    );
}

export default SearchForm;