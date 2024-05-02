// Form.js
import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { BtechPdfTemplate, MtechPdfTemplate } from "./Pdf";
import CustomDropdown from "./CustomDropdown";
import "./styles.css"; // Import the CSS file

function Form() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [showPdfLink, setShowPdfLink] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCourseSelect = (selectedCourse) => {
    setCourse(selectedCourse);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && course) {
      setShowPdfLink(true);
    } else {
      alert("Please Fill In All Fields Before Submitting.");
    }
  };

  const renderPdfLink = () => {
    if (!showPdfLink) return null;
    const pdfTemplate =
      course === "B.tech" ? (
        <BtechPdfTemplate name={name} course={course} />
      ) : (
        <MtechPdfTemplate name={name} course={course} />
      );
    return (
      <PDFDownloadLink
        className="pdf-download"
        document={pdfTemplate}
        fileName={`Course_Pdf_${course}.pdf`}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Processing" : "Download PDF"
        }
      </PDFDownloadLink>
    );
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="label">
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
            className="input"
          />
        </label>
        <br />
        <label className="label1">
          Course:
          <CustomDropdown
            options={["B.tech", "M.tech"]}
            selectedOption={course}
            onSelect={handleCourseSelect}
            required
          />
        </label>
        <br />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
      <br />
      <div className="pdf-link">{renderPdfLink()}</div>
    </div>
  );
}

export default Form;
