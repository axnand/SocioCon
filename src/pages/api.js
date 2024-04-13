import axios from 'axios';

// Define a helper function to make authenticated requests
export const makeAuthenticatedRequest = async (url, method, accessToken, data = null) => {
    try {
        // Set up request headers
        const headers = {
            Authorization: `Bearer ${accessToken}`, // Include the access token
            Accept: 'application/json', // Specify JSON response format
            'Content-Type': 'application/json', // Specify content type
        };

        // Make the HTTP request using axios
        const response = await axios({
            url,
            method,
            headers,
            data, // Data is optional (e.g., for POST/PUT requests)
        });

        // Return the response data
        return response.data;
    } catch (error) {
        console.error('Error making request:', error);
        throw error;
    }
};
