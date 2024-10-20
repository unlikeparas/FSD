// src/components/Experience.js
import React, { useContext, useState } from 'react';
import { ResumeContext } from '../contexts/ResumeContext';
import { useNavigate } from 'react-router-dom';

const Experience = () => {
  const { experience, setExperience } = useContext(ResumeContext);
  const [newExperience, setNewExperience] = useState({
    companyName: '',
    jobTitle: '',
    yearsOfExperience: '',
    generalThoughts: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience({
      ...newExperience,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new experience to the experience list
    setExperience([...experience, newExperience]);

    // Reset the form
    setNewExperience({
      companyName: '',
      jobTitle: '',
      yearsOfExperience: '',
      generalThoughts: '',
    });
  };

  return (
    <div className="container">
      <h2>Experience Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Company Name */}
        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">
            Company Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            name="companyName"
            value={newExperience.companyName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Job Title */}
        <div className="mb-3">
          <label htmlFor="jobTitle" className="form-label">
            Job Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="jobTitle"
            name="jobTitle"
            value={newExperience.jobTitle}
            onChange={handleChange}
            required
          />
        </div>

        {/* Years of Experience */}
        <div className="mb-3">
          <label htmlFor="yearsOfExperience" className="form-label">
            Years of Experience:
          </label>
          <input
            type="number"
            className="form-control"
            id="yearsOfExperience"
            name="yearsOfExperience"
            value={newExperience.yearsOfExperience}
            onChange={handleChange}
            required
          />
        </div>

        {/* General Thoughts */}
        <div className="mb-3">
          <label htmlFor="generalThoughts" className="form-label">
            General Thoughts/Reflections:
          </label>
          <textarea
            className="form-control"
            id="generalThoughts"
            name="generalThoughts"
            value={newExperience.generalThoughts}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Experience
        </button>
      </form>

      {/* Display Added Experience */}
      <h3 className="mt-4">Added Experience</h3>
      {experience.length === 0 ? (
        <p>No experience added yet.</p>
      ) : (
        <ul className="list-group">
          {experience.map((exp, index) => (
            <li key={index} className="list-group-item">
              <strong>{exp.companyName}</strong> - {exp.jobTitle}
              <br />
              Years of Experience: {exp.yearsOfExperience}
              <br />
              Thoughts: {exp.generalThoughts}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Experience;
