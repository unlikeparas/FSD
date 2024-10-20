// src/components/PersonalInfo.js
import React, { useContext } from 'react';
import { ResumeContext } from '../contexts/ResumeContext';
import { useNavigate } from 'react-router-dom';

const PersonalInfo = () => {
  const { personalInfo, setPersonalInfo } = useContext(ResumeContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally, add form validation here
    navigate('/education'); // Navigate to the Education section
  };

  return (
    <div className="container">
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={personalInfo.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={personalInfo.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={personalInfo.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone:
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={personalInfo.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={personalInfo.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Professional Summary */}
        <div className="mb-3">
          <label htmlFor="summary" className="form-label">
            Professional Summary:
          </label>
          <textarea
            className="form-control"
            id="summary"
            name="summary"
            value={personalInfo.summary}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>

        {/* Career Objective */}
        <div className="mb-3">
          <label htmlFor="careerObjective" className="form-label">
            Career Objective:
          </label>
          <textarea
            className="form-control"
            id="careerObjective"
            name="careerObjective"
            value={personalInfo.careerObjective}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
