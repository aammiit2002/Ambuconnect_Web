import React, { memo, useState, useEffect } from "react";
import { useUser } from "./UserContext";
import { Client, Databases, Query } from "appwrite";
import conf from "../conf/conf";
import PatientCard from "./PatientCard";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject(conf.appwriteProjectId); // Your project ID

const Activecaseshosp = () => {
  const { userEmail } = useUser();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const listCompletedCasesAmbu = async () => {
      try {
        const response = await databases.listDocuments(
          conf.appwriteDbId,
          conf.appwriteCollectionId,
          [
            Query.equal("Ambu_Email", userEmail),
            Query.equal("status", false)
          ]
        );

        const patientData = await Promise.all(
          response.documents.map(async document => {
            try {
              const fetchedlisteddoc = await databases.getDocument(
                conf.appwriteDbId,
                conf.appwriteCollectionId,
                document.$id
              );
              console.log(fetchedlisteddoc)
              return fetchedlisteddoc;
            } catch (error) {
              console.error('Error docid fetch document:', error);
              return null;
            }
          })
        );

        setPatients(patientData.filter(patient => patient !== null));
      } catch (error) {
        console.error('Error listing documents:', error);
      }
    };

    listCompletedCasesAmbu();
  }, [userEmail]);

  
  if (patients.length === 0) {
  
    return <div>Loading... may be error</div>;
  }


  return (
    <>
    <Navbar></Navbar>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    
      {patients.map(patient => (
        <PatientCard key={patient.$id} patient={patient} />
      ))}
    </div>
  </>
  );
};

export default memo(Activecaseshosp);
