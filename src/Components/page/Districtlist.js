import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const District = () => {
    const navigatore = useNavigate();
    const { id } = useParams();

    const [list, setList] = useState([])
    const [user, setUser] = useState({
        district: []
    })

    // console.log(user, '-----user');
    // console.log(district.push(user) , '----pushdata');
    const { district } = user;

    const inputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        loaduser();
    }, [])

    const onsubmit = async e => {
        e.preventDefault();
        if (user.district) {
            setList((ls) => [...ls, user])
        }
        console.log(list, 'list');
        let mydata = [{}];
        await axios.post("http://localhost:3001/ApiData", list);
        mydata.push()
    }

    const loaduser = async () => {

        const resulat = await axios.get(`http://localhost:3001/ApiData/${id}`);
        setUser(resulat.data)
        console.log(resulat.data);
    }


    return (
        <>
            <div className='container'>
                <h1>Add district</h1>
                <div className="row">
                    <div className="col-6">
                        <form onSubmit={e => onsubmit(e)}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Enter your name'
                                    name='district'
                                    value={district}
                                    onChange={e => inputChange(e)} />
                            </div>
                            <button className='btn btn-success mt-3'>Add user</button>
                        </form>
                    </div>
                </div>
                {
                    list.map((data, index) => {
                        return (
                            // <ul key={`index_${index}`}>
                                <li>{data.district}</li>
                            // </ul>
                        )
                    })
                }
            </div>
        </>
    )
}

export default District
