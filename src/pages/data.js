import React, { useEffect, useState } from 'react';
import { makeAuthenticatedRequest } from './api';
import { index} from 'C:\Users\91989\Desktop\Projects\vihan2\SocioCon\src\components\signin'

const MyComponent = () => {
    const [files, setFiles] = useState([]);
    const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with your access token

    useEffect(() => {
        // Define the API URL (e.g., Google Drive API URL)
        const apiUrl = 'https://www.googleapis.com/drive/v3/files';

        // Fetch files from Google Drive using the access token
        const fetchFiles = async () => {
            try {
                const data = await makeAuthenticatedRequest(apiUrl, 'GET', accessToken);
                setFiles(data.files); // Update state with the list of files
            } catch (error) {
                console.error('Error fetching files:', error);
            }
        };

        fetchFiles();
    }, [accessToken]); // Dependency array to re-run effect if accessToken changes

    return (
        <div>
            <h2>Files in Google Drive:</h2>
            <ul>
                {files.map((file) => (
                    <li key={file.id}>{file.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MyComponent;
