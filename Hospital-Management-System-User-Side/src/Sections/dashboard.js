import React, { useState, useEffect } from 'react';
import './dashboard.css'; // Assume you have this CSS file for styling

function Dashboard() {
    // Sample state initialization (replace these with actual data fetching logic)
    const [patientCount, setPatientCount] = useState(0);
    const [doctorCount, setDoctorCount] = useState(0);
    const [reportCount, setReportCount] = useState(0);
    const [patientsList, setPatientsList] = useState([]);

    useEffect(() => {
        // Fetch the counts and patient list from the server or database here
        // This is a placeholder for data fetching logic
        // Example: setPatientCount(fetchPatientCount());
        // For now, we'll use dummy data
        setPatientCount(3); // Example count
        setDoctorCount(10); // Example count
        setReportCount(20); // Example count
        setPatientsList([
            // Example patient data
            { name: 'Asghar', age: 23, address: 'Gujrat', disease: 'Flu' },
            { name: 'saad ', age: 22, address: 'Lahore', disease: 'Cough' },
            { name: 'daniyal', age: 23, address: 'Sialkot', disease: 'Fever' },
            // ... more patients
        ]);
    }, []);

    return (
        <div className="admin-dashboard">
            <h2>Dashboard</h2>
            <div className="summary">
                <p>Number of Patients: {patientCount}</p>
                <p>Number of Doctors: {doctorCount}</p>
                <p>Number of Reports Generated: {reportCount}</p>
            </div>
            <div className="patients-list">
                <h3>Registered Patients</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Disease</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientsList.map((patient, index) => (
                            <tr key={index}>
                                <td>{patient.name}</td>
                                <td>{patient.age}</td>
                                <td>{patient.address}</td>
                                <td>{patient.disease}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;
