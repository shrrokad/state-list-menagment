import axios from 'axios';
import '../../App.css'
import Adduser from './Addustate';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    userData();
  }, [])

 

  const userData = async () => {
    console.log("hello");
    try {
      const result = await axios.get('http://localhost:3001/ApiData')
      // console.log('------>' , result.data);
      setUsers(result.data)
    }
    catch (error) {
      console.log(error);
    }
  }

  const deletdata = async id => {
    
    await axios.delete(`http://localhost:3001/ApiData/${id}`)
    userData();
  }



  return (
    <>
    {/* <button onClick={handelclick()}>refresh</button> */}
      <div className='text-align'>
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>State Name</th>
            <th>Action</th>
            <th>District</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((userdata, index) => {
              return (
                <tr key={`userdata_${index}`}>
                  <td>{index + 1}</td>
                  <td>{userdata.state}</td>
                  <td>
                    <Link to={`/Districtlist/${userdata.id}`} className='text-success'>show</Link>
                  </td>
                  <td><ul>{userdata.district?.map((data, index) => 
                    <div key={index}>
                      <li>{data}</li>
                    </div>
                  )}</ul></td>
                  <td><Link to="#" className='text-danger' onClick={() => { deletdata(userdata.id) }}>Delete</Link></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>


    </>
  )
}

export default Home
