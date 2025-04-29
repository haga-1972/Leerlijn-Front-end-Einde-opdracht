import axios from 'axios';
import React, { useState} from "react";

const API_URL = 'https://sandbox.api.high-mobility.com/';
const API_KEY = 'JOUW_API_SLEUTEL "frontendopdracht:9WTihG0MZKy6eDBkbfwB"';

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