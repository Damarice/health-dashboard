import React from 'react';
import './PatientList.css';  // Importing the CSS file for PatientList

function PatientList() {
  const patients = [
    { name: 'Emily Williams', gender: 'Female', age: 18 },
    { name: 'Ryan Johnson', gender: 'Male', age: 45 },
    { name: 'Brandon Mitchell', gender: 'Male', age: 36 },
    { name: 'Jessica Taylor', gender: 'Female', age: 28 },
    // Add other patients here...
  ];

  return (
    <div className="patient-list">
      <h2>Patients</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>
            <span>{patient.name}</span>
            <span>{patient.gender}</span>
            <span>{patient.age} yrs</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientList;
