export const fetchCars = async () => {
    const response = await fetch('/htps://high-mobility.com');
    conexport const fetchCars = async () => {
        const response = await fetch('/htps://high-mobility.com');
        const data = await response.json();
        return data;
    };
    st data = await response.json();
    return data;
};
