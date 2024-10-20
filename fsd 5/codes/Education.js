// src/components/Education.js
import React, { useContext, useState } from 'react';
import { ResumeContext } from '../contexts/ResumeContext';
import { useNavigate } from 'react-router-dom';

const Education = () => {
  const { education, setEducation } = useContext(ResumeContext);
  const navigate = useNavigate();
  const [newEducation, setNewEducation] = useState({
    schoolName: '',
    schoolJoinDate: '',
    schoolEndDate: '',
    tenthMarks: '',
    twelfthMarks: '',
    collegeName: '',
    degree: '',
    collegeJoinDate: '',
    collegeEndDate: '',
    aggregateCGPA: '',
    academicSkills: '',
    nonAcademicSkills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEducation({
      ...newEducation,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new education details to the education list
    setEducation([...education, newEducation]);

    // Reset the form for adding more educational details if needed
    setNewEducation({
      schoolName: '',
      schoolJoinDate: '',
      schoolEndDate: '',
      tenthMarks: '',
      twelfthMarks: '',
      collegeName: '',
      degree: '',
      collegeJoinDate: '',
      collegeEndDate: '',
      aggregateCGPA: '',
      academicSkills: '',
      nonAcademicSkills: '',
    });
  };

  return (
    <div className="container">
      <h2>Education Details</h2>
      <form onSubmit={handleSubmit}>
        {/* School Information */}
        <div className="mb-3">
          <label htmlFor="schoolName" className="form-label">
            School Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="schoolName"
            name="schoolName"
            value={newEducation.schoolName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="schoolJoinDate" className="form-label">
              School Join Date:
            </label>
            <input
              type="date"
              className="form-control"
              id="schoolJoinDate"
              name="schoolJoinDate"
              value={newEducation.schoolJoinDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="schoolEndDate" className="form-label">
              School End Date:
            </label>
            <input
              type="date"
              className="form-control"
              id="schoolEndDate"
              name="schoolEndDate"
              value={newEducation.schoolEndDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* 10th and 12th Marks */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="tenthMarks" className="form-label">
              10th Grade Marks (%):
            </label>
            <input
              type="number"
              className="form-control"
              id="tenthMarks"
              name="tenthMarks"
              value={newEducation.tenthMarks}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="twelfthMarks" className="form-label">
              12th Grade Marks (%):
            </label>
            <input
              type="number"
              className="form-control"
              id="twelfthMarks"
              name="twelfthMarks"
              value={newEducation.twelfthMarks}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* College Information */}
        <div className="mb-3">
          <label htmlFor="collegeName" className="form-label">
            College Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="collegeName"
            name="collegeName"
            value={newEducation.collegeName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Degree and CGPA */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="degree" className="form-label">
              Degree:
            </label>
            <input
              type="text"
              className="form-control"
              id="degree"
              name="degree"
              value={newEducation.degree}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="aggregateCGPA" className="form-label">
              Aggregate CGPA:
            </label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              id="aggregateCGPA"
              name="aggregateCGPA"
              value={newEducation.aggregateCGPA}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* College Join and End Date */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="collegeJoinDate" className="form-label">
              College Join Date:
            </label>
            <input
              type="date"
              className="form-control"
              id="collegeJoinDate"
              name="collegeJoinDate"
              value={newEducation.collegeJoinDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="collegeEndDate" className="form-label">
              College End Date:
            </label>
            <input
              type="date"
              className="form-control"
              id="collegeEndDate"
              name="collegeEndDate"
              value={newEducation.collegeEndDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Academic Skills */}
        <div className="mb-3">
          <label htmlFor="academicSkills" className="form-label">
            Academic Skills:
          </label>
          <textarea
            className="form-control"
            id="academicSkills"
            name="academicSkills"
            value={newEducation.academicSkills}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>

        {/* Non-Academic Skills */}
        <div className="mb-3">
          <label htmlFor="nonAcademicSkills" className="form-label">
            Non-Academic Skills:
          </label>
          <textarea
            className="form-control"
            id="nonAcademicSkills"
            name="nonAcademicSkills"
            value={newEducation.nonAcademicSkills}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Education
        </button>
      </form>

      {/* Display Added Education */}
      <h3 className="mt-4">Added Education</h3>
      {education.length === 0 ? (
        <p>No education details added yet.</p>
      ) : (
        <ul className="list-group">
          {education.map((edu, index) => (
            <li key={index} className="list-group-item">
              <strong>{edu.schoolName}</strong> - 10th Marks: {edu.tenthMarks}%, 12th Marks: {edu.twelfthMarks}%
              <br />
              <strong>{edu.collegeName}</strong> - Degree: {edu.degree}, CGPA: {edu.aggregateCGPA}
              <br />
              Academic Skills: {edu.academicSkills}, Non-Academic Skills: {edu.nonAcademicSkills}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Education;
