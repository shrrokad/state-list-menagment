import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { ResetTv } from '@mui/icons-material'
// import './style.css'



const District = () => {

    const { id } = useParams()

    const [list, setList] = useState([])

    const [district, setDistrict] = useState("")

    const [stateDetails, setStateDetails] = useState({})

    const handleChange = (e) => {
        setDistrict(e.target.value)
    }


    useEffect(() => {
        DataLoading()
    }, [])


    const HandleSubmit = async (e) => {

        e.preventDefault()
        const DataArray = stateDetails.district = [
            ...stateDetails.district || [],
            district
        ]
        console.log(DataArray, "---->DataArray")

        await axios.put(`http://localhost:3001/ApiData/${id}`, stateDetails);
        setDistrict("")
    }

    const DataLoading = async () => {
        const showResult = await axios.get(`http://localhost:3001/ApiData/${id}`);
        setStateDetails(showResult.data)

    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <form action="#" className='form-group mt-5 ' onSubmit={e => HandleSubmit(e)}>
                    <div className="input-area">
                        <input type="text" name="district" id="district" placeholder="Enter Your District" onChange={e => handleChange(e)} value={district} />
                    </div>
                    <div className='mt-5'>
                        <input type="submit" value="Submit" className="btn btn-dark" />
                        <Link to={"/"} className="btn btn-success ms-3">Home</Link>
                    </div>
                </form>
            </div>
            <div className="d-flex justify-content-center">
                <ul className='mt-5'>{stateDetails.district?.map((data, index) =>
                    <div key={index}>
                        <li>{data}</li>
                    </div>
                )}</ul>
            </div>
        </>
    )
}

export default District