import MobileImg from "../Assets/mobile.f82d7322.png";
import WomanImg from "../Assets/women.eb5c49c5.png";
import admin from "../Assets/doctor.png";
import "./admin.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const notify = (text) => toast(text);
function Doc() {
  let initialData = {
    patientName: "",
    age: "",
    gender: "",
    mobile: "",
    address: "",
    email: "",
    disease: "",
    qualification:"",
  };

  const [formData, setFormData] = useState(initialData);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Display a confirmation message on submit
    notify(" Added Successfully");
    setFormData(initialData); // Resetting form after submission
  };

  return (
    <div>
      <section className="section-area account-wraper1">
        <div className="container-fluid">
          <div className="appointment-inner section-sp2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                  <div className="appointment-form form-wraper">
                    <h3>Enter Information</h3>
                    <form onSubmit={handleSubmit}>
                      {/* Add form fields here */}
                      {/* Example of a few fields */}
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          value={formData.patientName}
                          name="patientName"
                          onChange={handleFormChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Age"
                          value={formData.age}
                          name="age"
                          onChange={handleFormChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Gender"
                          value={formData.gender}
                          name="gender"
                          onChange={handleFormChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Mobile"
                          value={formData.mobile}
                          name="mobile"
                          onChange={handleFormChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          value={formData.email}
                          name="email"
                          onChange={handleFormChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Qualification"
                          value={formData.qualification}
                          name="qualification"
                          onChange={handleFormChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                          value={formData.address}
                          name="address"
                          onChange={handleFormChange}
                          required
                        />
                      </div>
                      {/* Add other fields similarly */}
                      <button
                        type="submit"
                        className="btn btn-secondary btn-lg"
                      >
                        Submit
                      </button>
                    </form>
                    {submissionMessage && <p>{submissionMessage}</p>}
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12">
                  <div className="appointment-thumb">
                    {/* <img src={admin} alt="img" /> */}
                    <div className="images-group">
                      <img className="img1" src={admin} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Doc;
