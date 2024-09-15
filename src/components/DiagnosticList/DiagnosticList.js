import React from 'react';
import './DiagnosticList.css';  // Importing the CSS file for DiagnosticList

function DiagnosticList() {
  const diagnostics = [
    { problem: 'Hypertension', description: 'Chronic high blood pressure', status: 'Under Observation' },
    { problem: 'Type 2 Diabetes', description: 'Insulin resistance and elevated blood sugar', status: 'Cured' },
    { problem: 'Asthma', description: 'Recurrent episodes of bronchial constriction', status: 'Inactive' },
    // Add more diagnostics here...
  ];

  return (
    <div className="diagnostic-list">
      <h2>Diagnostic List</h2>
      <ul>
        {diagnostics.map((diagnostic, index) => (
          <li key={index}>
            <span>{diagnostic.problem}</span>
            <span>{diagnostic.description}</span>
            <span>{diagnostic.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DiagnosticList;
