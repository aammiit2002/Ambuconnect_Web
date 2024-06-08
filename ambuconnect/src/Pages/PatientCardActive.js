import React from "react";
import { Client, Databases } from "appwrite";
import conf from "../conf/conf";
import { PDFDocument, rgb } from "pdf-lib";
//import { useUser } from './UserContext';

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject(conf.appwriteProjectId); // Your project ID

const PatientCardActive = ({ patient }) => {
  // const { userName, userId, userEmail } = useUser();
  const newData = {
    status: true,
  };

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

  async function caseCompleted() {
    databases
      .updateDocument(
        conf.appwriteDbId,
        conf.appwriteCollectionId,
        patient.$id,
        newData
      )
      .then((updatedDocument) => {
        console.log("Document updated successfully:", updatedDocument);
      })
      .catch((error) => {
        console.error("Error updating document:", error);
      });
  }
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold text-gray-800">
        {patient.Patient_name}
      </h2>
      <p className="text-gray-600">Nurse_ID: {patient.Nurse_ID}</p>
      <p className="text-gray-600">Medical Condition: {patient.Condition}</p>
      <p className="text-gray-600">Hospital_Name: {patient.Hospital_Name}</p>
      <button onClick={caseCompleted}>Case Completed</button>
      <button onClick={downloadPdf}>Download</button>
    </div>
  );
};

export default PatientCardActive;
