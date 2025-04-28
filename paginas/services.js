import axios from 'axios';
import React, { useState} from "react";

const API_URL = 'https://sandbox.api.high-mobility.com/';  // Vervang dit door de juiste URL van de API
const API_KEY = 'JOUW_API_SLEUTEL "rzeVs5nnx5OCMQejjfQTjLE8Jb2ReFSU"';  // Vervang dit door jouw API-sleutel

export const getCars = async () => {
    try {
        const response = await axios.get(`${API_URL}/cars`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Er is een fout opgetreden bij het ophalen van auto's:", error);
        return [];
    }
};
