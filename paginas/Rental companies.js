import React, { useState, useEffect } from 'react';

const RentalCompanies = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Haal de data op van de API
        const fetchData = async () => {
            try {
                const response = await fetch('https://high-mobility.com');
                const data = await response.json();
                // Sorteer de bedrijven op beoordeling en haal de top 5 op
                const sortedCompanies = data.sort((a, b) => b.rating - a.rating).slice(0, 5);
                setCompanies(sortedCompanies);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Er is een fout opgetreden: {error.message}</div>;
    }

    return (
            <div>
                <h1>Top 5 Autoverhuurbedrijven</h1>
                <ul>
                    {companies.map((company) => (
                            <li key={company.id}>
                                <h2>{company.name}</h2>
                                <p>Beoordeling: {company.rating}</p>
                                <p>{company.description}</p>
                            </li>
                    ))}
                </ul>
            </div>
    );
};

export default RentalCompanies;
