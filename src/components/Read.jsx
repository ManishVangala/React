import React, { useEffect, useState } from 'react'
import axios from "axios";
import Table from 'react-bootstrap/Table';

const  Read = () => {
    const [data, setData] = useState([])

    

    // to make get method api call
    useEffect(() => {
        axios.get("https://superadmin.homes247.in/crmbackend/executives")
             .then((response) => {
                          console.log("data", response);
                          setData(response.data.ExecutiveList);
        });
      }, []);
    


     
  return (
    <>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Executives_name</th>
          <th>executives_number</th>
          <th>executives_email</th>
          <th>exec_desig</th>
          <th>executives_dob</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value) =>  (     
        
        <tr key={value.IDPK}> 
        
          <td>{value.IDPK}</td>
          <td>{(value.executives_name)?(value.executives_name): "No Data"}</td>
          <td>{(value.executives_number)?(value.executives_number): "No Data"}</td>
          <td>{(value.executives_email)?(value.executives_email): "No Data"}</td>
          <td>{(value.exec_desig)?(value.exec_desig): "No Data"}</td>
          <td>{(value.executives_dob)?(value.executives_dob): "No Data"}</td>
          
        </tr>
        
  ))} 
        
      </tbody>
    </Table>
    </>
  )
}

export default Read
