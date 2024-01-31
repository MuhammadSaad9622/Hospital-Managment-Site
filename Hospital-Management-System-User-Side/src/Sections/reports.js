import React, { useState, useEffect } from 'react';
import './reports.css'; // Assume you have this CSS file for styling

function Reports() {
    // Sample state initialization (replace these with actual data fetching logic)
    const [reports, setReports] = useState([]);

    useEffect(() => {
        
        setReports([
            // Example report data
            { date: '2024-01-01', patient: 'John Doe', doctor: 'Dr. Smith', department: 'Cardiology', reportId: 'RPT1001' },
            // ... more reports
        ]);
    }, []);

    return (
        <div className="all-reports">
            <h2>All Reports</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Patient</th>
                        <th>Doctor</th>
                        <th>Department</th>
                        <th>Report ID</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report, index) => (
                        <tr key={index}>
                            <td>{report.date}</td>
                            <td>{report.patient}</td>
                            <td>{report.doctor}</td>
                            <td>{report.department}</td>
                            <td>{report.reportId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Reports;
