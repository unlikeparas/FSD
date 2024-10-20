// src/components/Preview.js
import React, { useContext } from 'react';
import { ResumeContext } from '../contexts/ResumeContext';

const Preview = () => {
  const { personalInfo, education, experience } = useContext(ResumeContext);

  return (
    <div className="container">
      <h2>Resume Preview</h2>

      {/* Personal Information */}
      <section className="mb-4">
        <h3>Personal Information</h3>
        <p>
          <strong>Name:</strong> {personalInfo.firstName} {personalInfo.lastName}
        </p>
        <p>
          <strong>Email:</strong> {personalInfo.email}
        </p>
        <p>
          <strong>Phone:</strong> {personalInfo.phone}
        </p>
        <p>
          <strong>Address:</strong> {personalInfo.address}
        </p>
      </section>

      {/* Education */}
      <section className="mb-4">
        <h3>Education</h3>
        {education.length === 0 ? (
          <p>No education details provided.</p>
        ) : (
          education.map((school, index) => (
            <div key={index} className="mb-2">
              <h5>
                {school.degree} in {school.fieldOfStudy}
              </h5>
              <p>
                <strong>{school.schoolName}</strong> |{' '}
                {school.startDate ? school.startDate : 'Start Date not provided'} -{' '}
                {school.endDate ? school.endDate : 'End Date not provided'}
              </p>
              <p>
                <strong>10th Marks:</strong> {school.tenthMarks || 'Not provided'}
              </p>
              <p>
                <strong>12th Marks:</strong> {school.twelfthMarks || 'Not provided'}
              </p>
              <p>
                <strong>Aggregate CGPA:</strong> {school.aggregateCGPA || 'Not provided'}
              </p>
              <p>
                <strong>Academic Skills:</strong> {school.academicSkills || 'Not provided'}
              </p>
              <p>
                <strong>Non-Academic Skills:</strong> {school.nonAcademicSkills || 'Not provided'}
              </p>
            </div>
          ))
        )}
      </section>

      {/* Experience */}
      <section className="mb-4">
        <h3>Experience</h3>
        {experience.length === 0 ? (
          <p>No work experience provided.</p>
        ) : (
          experience.map((job, index) => (
            <div key={index} className="mb-2">
              <h5>{job.position}</h5>
              <p>
                <strong>{job.companyName}</strong> |{' '}
                {job.startDate ? job.startDate : 'Start Date not provided'} -{' '}
                {job.endDate ? job.endDate : 'End Date not provided'}
              </p>
              <p>{job.responsibilities ? job.responsibilities : 'No responsibilities provided'}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Preview;
