// src/contexts/ResumeContext.js
import React, { createContext, useState } from 'react';

// Create the Context
export const ResumeContext = createContext();

// Create a Provider Component
export const ResumeProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    // Add more fields as needed
  });

  const [education, setEducation] = useState([
    // Initialize with an empty array or default education entries
  ]);

  const [experience, setExperience] = useState([
    // Initialize with an empty array or default experience entries
  ]);

  // Add more state variables as needed

  return (
    <ResumeContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        education,
        setEducation,
        experience,
        setExperience,
        // Add more state variables and setters here
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
