import React from 'react';
import './App.css'; // Custom CSS for overall styling

import NavBar from './components/NavBar/NavBar';
import PatientList from './components/PatientList/PatientList';
import PatientDetails from './components/PatientDetails/PatientDetails';
import DiagnosisHistory from './components/DiagnosisHistory/DiagnosisHistory';
import DiagnosticList from './components/DiagnosticList/DiagnosticList';
import LabResults from './components/LabResults/LabResults';

function App() {
  // The patient object could be passed dynamically based on selection from PatientList
  const patient = {
    name: "Jessica Taylor",
    dob: "August 23, 1996",
    gender: "Female",
    contact: "(415) 555-1234",
    emergency: "(415) 555-5678",
    insurance: "Sunrise Health Assurance",
  };

  return (
    <div className="app">
      <NavBar />
      <div className="main-content">
        <div className="left-panel">
          <PatientList />
        </div>
        <div className="right-panel">
          <div className="patient-overview">
            <PatientDetails patient={patient} />
          </div>
          <div className="diagnosis-section">
            <DiagnosisHistory />
          </div>
          <div className="other-details">
            <DiagnosticList />
            <LabResults />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
