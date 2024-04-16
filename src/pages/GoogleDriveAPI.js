import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GoogleDriveAPI = ({ accessToken }) => {
  const [files, setFiles] = useState([]);

  const listContentsOfFolder = async (folderId) => {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.get(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&fields=files(id,name,mimeType,webContentLink)`,
        { headers }
      );
      
      // Set the files in state
      setFiles(response.data.files);
      
      // Log the files to the console
      console.log('Contents of the folder:', response.data.files);
    } catch (error) {
      console.error('Error listing folder contents:', error);
    }
  };

  useEffect(() => {
    // Specify the folder ID you want to list
    const folderId = '17QWgrpDAiHphvCCjY5ZhKabuy3xIjLSu';
    listContentsOfFolder(folderId);
  }, [accessToken]);

  return (
    <div>
      <h3>Contents of the Folder:</h3>
      <ul>
        {files.map(file => (
          <li key={file.id}>
            {file.name} - {file.mimeType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleDriveAPI;
