import "./message.scss"
import DataTable from "../../Components/DataTable/DataTable"
import {DataGrid, GridColDef, GridValueGetterParams,GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from "../../Components/Config";




const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  
  
  {
  field: 'name',
  headerName: 'Name',
  width: 150,
  editable: false,
  },
  {
    field:"contact",
    headerName:"Contact",
    width:150,

  },
  
  {
    field: "email",
    headerName:"Email",
    width:220

  },
{
  field:"query",
  headerName:'Message',
  width:150,
  height:450



},
 
];
const setInquiries = (newInquiries: Array<any>) => {
  setInquiries(newInquiries);
};




const Message = () => {
  const [allQuiries, setInquiries] = useState([]);

  useEffect(() => {
    async function fetchInquiries() {
      try {
        const response = await axios.get(`${api}/contact/find`);
        console.log('Fetched data:', response.data);

        if (Array.isArray(response.data.Contact)) {
          const inquiries = response.data.Contact.map((Contact, index) => ({
            id: index + 1, // You can use a more appropriate unique identifier here
            name: Contact.name,
            contact: Contact.contact,
            email: Contact.email,
            query: Contact.query,
          }));
          setInquiries(inquiries);
        } else {
          console.error('Invalid API response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching inquiries:', error);
      }
    }

    fetchInquiries();
  }, []);

  return (
    <div className="messages">
      <div className="info">
        <h1>ContactUS data</h1>
      </div>
      
      {allQuiries.length > 0 ? (
        <DataTable slug="users" columns={columns} rows={allQuiries} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Message;
