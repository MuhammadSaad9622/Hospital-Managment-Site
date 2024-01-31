import React from "react";
import "./Report.css";
import "./about.css";
import "../index.css";
import NavBars from "../Sections/navbar";
import { FiHome } from "react-icons/fi";
import Footer from "../Sections/footer";
import ToTop from "../Sections/totop";
import { Link } from "react-router-dom";

function Service() {
  // Dummy data for the reports
  const dummyReportData = [
    {
      patientName: "Asghar ali",
      patientDisease: "Flu",
      docName: "Dr. saad",
      docDepartment: "General Medicine",
      date: "2024-01-10",
      docMobile: "1234567890",
      patientAge: 30,
      patientGender: "Male",
      patientBloodGroup: "A+",
      patientTemperature: "98.6",
      patientWeight: "70",
      patientBP: "120/80",
      patientGlucose: "90",
      extrainfo: "Rest and hydration recommended",
      medicines: [
        { medName: "Paracetamol", dosage: "500mg", duration: "5 Days" },
        // ... more medicines
      ],
      time: "10:00 AM",
    },
    // ... more report entries
  ];

  return (
    <div>
      <NavBars />
      {/* Banner and breadcrumb code */}
      <div className="reportTables">
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Disease</th>
              <th>Doctor</th>
              <th>Department</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {dummyReportData.map((elem, index) => (
              <tr key={index}>
                <td>{elem.patientName}</td>
                <td>{elem.patientDisease}</td>
                <td>{elem.docName}</td>
                <td>{elem.docDepartment}</td>
                <td>{elem.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Detailed report views */}
      {dummyReportData.map((elem, index) => (
        <div className="reportContainer">
        <div className="reportHeading">
          <h1>HEALTH REPORT</h1>
        </div>
        <div className="reportDetail">
          <div>
            <p>Doctor Name : {elem.docName}</p>
            <p>Number : {elem.docMobile}</p>
            <p>Department : {elem.docDepartment}</p>
          </div>
          <div>
            <p>Patient Name : {elem.patientName}</p>
            <p>Age :{elem.patientAge}</p>
            <p>Gender : {elem.patientGender}</p>
          </div>
        </div>
        <div className="reportMedical">
          <div>
            <p>Blood Group : </p>
            <p>Disease :</p>
            <p>Temperature : </p>
            <p>Weight :</p>
            <p>BP :</p>
            <p>Blood Sugar :</p>
            <p>Remarks :</p>
          </div>
          <div>
            <p>{elem.patientBloodGroup}</p>
            <p> {elem.patientDisease}</p>
            <p>{elem.patientTemperature} C</p>
            <p>{elem.patientWeight} KG </p>
            <p>{elem.patientBP} mm/hg</p>
            <p>{elem.patientGlucose} mg/dl</p>
            <p>{elem.extrainfo} </p>
          </div>
        </div>
        <div className="reportMedicines">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Dosage</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {elem.medicines.map((ele) => {
                return (
                  <tr>
                    <td>{ele.medName}</td>
                    <td>{ele.dosage}</td>
                    <td>{ele.duration}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="reportDate">
          <p>Date : { elem.date}</p>
          <p>Time : {elem.time }</p>
        </div>
      </div>
      ))}
      <Footer />
      <ToTop />
    </div>
  );
}

export default Service;
