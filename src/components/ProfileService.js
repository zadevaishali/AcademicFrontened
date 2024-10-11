// profileService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/profiles';

// Create Profile
export const createProfile = async (profileData) => {
    return axios.post(API_URL, profileData);
};

// Get Profile by IDs
export const getProfileById = async (id) => {
    return axios.get(`${API_URL}/${id}`);
};

// Update Profile by ID
export const updateProfileById = async (id, profileData) => {
    return axios.put(`${API_URL}/${id}`, profileData);
};

// Delete Profile by ID
export const deleteProfileById = async (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
