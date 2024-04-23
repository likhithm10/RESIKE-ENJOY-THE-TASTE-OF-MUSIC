import React, { useEffect, useState } from 'react'
import './viewuser.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function UsersData() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:2032/viewusers');
        setUsers(response.data);
      } catch (error) {
        console.error(error.message);
      }
    }
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    const deleteUser = async (email) => {
      try {
        await axios.delete(`http://localhost:2032/deleteuser/${email}`);
        fetchUsers();
      } catch (error) {
        console.error(error.message);
      }
    }
  
    // const viewUser = async (email) => {
    //   try 
    //   {
    //     navigate(`/viewuserprofile/${email}`)
    //     window.location.reload()
    //   } 
    //   catch (error) 
    //   {
    //     console.error(error.message);
    //   }
    // }

  return (
    <div className="main_content">
    {/* <h2 class="header" > I am in View Users page</h2>   */}
    <div className="info">
      
    <div align="center" >
      <h1>Users</h1>
      <br/><br/><br/>
      <div className='data'>
      <table border={1}  style={{ width: 'auto', height: 'auto' }} id="table" >
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(users) && users.length > 0 ? (
    users.map((user, index) => (
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.gender}</td>
        <td>{user.dateofbirth}</td>
        <td>{user.email}</td>
        <td>{user.contact}</td>
        <td>
          <button onClick={() => deleteUser(user.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
        </div>
    </div>
    </div>
    </div>
  );
  
}