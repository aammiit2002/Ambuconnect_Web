import React from "react";
import { PDFDocument, rgb } from "pdf-lib";
import Navbar from "../Components/Navbar";
import "./PatientCard.css";
import Prof from "../Assets/Card_img.png";
import { MdDownloadForOffline } from "react-icons/md";


const PatientCard = ({ patient }) => {
  const downloadPdf = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 12;
    const padding = 40;

    page.drawText("Patient Details", {
      x: padding,
      y: height - padding,
      size: fontSize+5,
      color: rgb(0, 0, 0),
    });

    const details = `
      Patient Name: ${patient.Patient_name}
      Nurse ID: ${patient.Nurse_ID}
      Nurse name: ${patient.nurse_name},
      Medical Condition: ${patient.Condition}
      Hospital Name: ${patient.Hospital_Name}
      Hospital Email: ${patient.Hospital_Email}
      Amublance id :${patient.ambu_id}
      Ambulance Email:${patient.Ambu_Email}
      Age:${patient.Age}
      Gender:${patient.Gender}
      Condition:${patient.Condition}
      Other details:${patient.Other}
      Heart:${patient.Heart}
      Blood Pressure:${patient.BP}
      Temperature:${patient.temp}
      Oxygen Level:${patient.oxygen}
      Symptoms:${patient.Symptoms}
      Conciousness:${patient.Conciousness}
      Severity:${patient.Severity}
      Interventions: ${patient.INTERVENTIONS}
      Medications: ${patient.Medication}
    `;
    
    page.drawText(details, {
      x: padding,
      y: height - padding * 2,
      size: fontSize,
      color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${patient.Patient_name}_details.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  //   return (
  //     <>
  //       <Navbar></Navbar>
  //       <div className="p_card">
  //         <h2 className="text-xl font-bold text-gray-800">
  //           {patient.Patient_name}
  //         </h2>
  //         <p className="text-gray-600">Nurse ID: {patient.Nurse_ID}</p>
  //         <p className="text-gray-600">Medical Condition: {patient.Condition}</p>
  //         <p className="text-gray-600">Hospital Name: {patient.Hospital_Name}</p>
  //         <button onClick={downloadPdf}>Download</button>
  //       </div>
  //     </>
  //   );
  // };
return (
    <>
      <div className="card-container">
        <div className="p_card">
          <div className="p_left">
            <img src={Prof} alt="" />
          </div>
          <div className="p_right">
            <p className="font-bold text-gray-800">
              {patient.Patient_name}
            </p>
            <p className="text-gray-600">Nurse ID: {patient.Nurse_ID}</p>
            <p className="text-gray-600">
              Medical Condition: {patient.Condition}
            </p>
            <p className="text-gray-600">
              Hospital Name: {patient.Hospital_Name}
            </p>
            <button onClick={downloadPdf}>
              <MdDownloadForOffline />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
//   return (
//     <>
//       <Navbar></Navbar>
//       <div className="card-container">
//         {patient.map((patient, index) => (
//           <div className="p_card" key={index}>
//             <h2 className="text-xl font-bold text-gray-800">
//               {patient.Patient_name}
//             </h2>
//             <p className="text-gray-600">Nurse ID: {patient.Nurse_ID}</p>
//             <p className="text-gray-600">
//               Medical Condition: {patient.Condition}
//             </p>
//             <p className="text-gray-600">
//               Hospital Name: {patient.Hospital_Name}
//             </p>
//             <button onClick={downloadPdf}>Download</button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
export default PatientCard;
