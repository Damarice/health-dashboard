import React from 'react';
import './DiagnosisHistory.css';  // Importing the CSS file for DiagnosisHistory
import { Line } from 'react-chartjs-2';

function DiagnosisHistory() {
  const data = {
    labels: ['Oct 2023', 'Dec 2023', 'Jan 2024', 'Mar 2024'],
    datasets: [
      {
        label: 'Systolic',
        data: [140, 150, 145, 160],
        borderColor: '#ff6384',
        fill: false,
      },
      {
        label: 'Diastolic',
        data: [80, 85, 78, 90],
        borderColor: '#36a2eb',
        fill: false,
      },
    ],
  };

  return (
    <div className="diagnosis-history">
      <h2>Diagnosis History</h2>
      <Line data={data} />
    </div>
  );
}

export default DiagnosisHistory;
