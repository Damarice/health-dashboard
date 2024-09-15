import React from 'react';
import './PatientDetails.css';  // Importing the CSS file for PatientDetails

function PatientDetails({ patient }) {
  return (
    <div className="patient-details">
      <h2>{patient.name}</h2>
      <p><strong>Date of Birth:</strong> {patient.dob}</p>
      <p><strong>Gender:</strong> {patient.gender}</p>
      <p><strong>Contact Info:</strong> {patient.contact}</p>
      <p><strong>Emergency Contact:</strong> {patient.emergency}</p>
      <p><strong>Insurance Provider:</strong> {patient.insurance}</p>
      <button className="btn-primary">Show All Information</button>
    </div>
  );
}

export default PatientDetails;
