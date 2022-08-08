import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../App.css'
import Home from './home';
import District from './District';

const Adduser = () => {

    const navigatore = useNavigate()
    const [user, setUser] = useState({
        state: "",
    })
    console.log(user, ' ----->user');

    const { state } = user;

    const inputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onsubmit = async e => {
        // e.preventDefault();
        let mydata = [{}];
            await axios.post("http://localhost:3001/ApiData", user);
            mydata.push()
    }


    return (
        <>
            <h1>Add State </h1>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-6">
                        <form onSubmit={e => onsubmit(e)}>
                            <div className="form-group input-group">
                                <label htmlFor="state" className='input-group-text'>State Name</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Enter State Name'
                                    name='state'
                                    value={state}
                                    onChange={e => inputChange(e)} />
                            </div>
                            <button type='submit' className='btn btn-dark mt-4' id='btn-flex '>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text'>State List</h1>
                <Home />
            </div>

        </>
    )
}

export default Adduser
