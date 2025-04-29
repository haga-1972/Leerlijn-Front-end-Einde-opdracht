const registerUser = async (userData) => {
    const response = await fetch("https://frontendopdracht.novi.education/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "frontendopdracht:9WTihG0MZKy6eDBkbfwB",
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();
    return data;
};