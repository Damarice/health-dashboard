import React from 'react';
import './LabResults.css';  // Importing the CSS file for LabResults

function LabResults() {
  const labResults = [
    { testName: 'Blood Tests', link: '/results/blood-tests' },
    { testName: 'CT Scans', link: '/results/ct-scans' },
    { testName: 'Radiology Reports', link: '/results/radiology-reports' },
    { testName: 'X-Rays', link: '/results/x-rays' },
    { testName: 'Urine Test', link: '/results/urine-test' },
    // Add more results here...
  ];

  return (
    <div className="lab-results">
      <h2>Lab Results</h2>
      <ul>
        {labResults.map((result, index) => (
          <li key={index}>
            <span>{result.testName}</span>
            <a href={result.link} className="download-link">Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LabResults;
