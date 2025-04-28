
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CarProvider, useCarContext } from './context/CarContext';
import CarList from './components/CarList';
import Modal from './components/Modal';

const HomePage = () => {
    const { cars, fetchCars, bookCar } = useCarContext();
    const [isModalOpen, setModalOpen] = React.useState(false);

    useEffect(() => {
        fetchCars();
    }, [fetchCars]);

    const handleBookCar = (car) => {
        bookCar(car);
        setModalOpen(true);
    };

    return (
            <div>
                <h1>Beschikbare Auto's</h1>
                <CarList cars={cars} onBook={handleBookCar} />
                <Modal
                        isOpen={isModalOpen}
                        onClose={() => setModalOpen(false)}
                        message="Je hebt een auto geboekt!"
                />
            </div>
    );
};

const App = () => {
    return (
            <CarProvider>
                <Router>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        {/* Andere pagina's kunnen hier worden toegevoegd */}
                    </Switch>
                </Router>
            </CarProvider>
    );
};

export default App;
