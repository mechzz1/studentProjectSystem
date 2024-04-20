import React, { useState, useEffect } from 'react'
import Card from '../../components/card/appCard'
import Masonry from 'react-masonry-css'
import toast from 'react-hot-toast';
import axios from 'axios'
import styles from './landing.module.css'
import NavBar from '../../components/navBar/navBar'
import TextField from '@mui/material/TextField'
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaProjectDiagram } from "react-icons/fa";

function landing() {
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    };
    const [data, setData] = useState([]);
 
    const [query, setQuery] = useState('');
    useEffect(() => {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:13000/users/getAllProjects',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const getUserProjects = async () => {
            try {
                const res = await axios.request(config);
                console.log(res.data.data);
                setData(res.data.data);
            } catch (error) {
                toast.error("Error " + `${error}`)
            }
        }
        getUserProjects();
    }, []);
    useEffect(() => {
        fetchData();
    }, [query]);
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:13000/users/search?query=${query}`);
            console.log(response.data.data);
            setData(response.data.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleSearch = (event) => {
        setQuery(event.target.value);
    };

    return (
        <>

            <nav className={`navbar navbar-light  justify-content-between ${styles.navBg}`} >
                <a className="navbar-brand">
                <FaProjectDiagram className='mb-1 mr-2' color={"#EE7214"} />
                    ProjectHub</a>
                <form className="form-inline">
                    <Link to="/login">
                        <button className="btn btn-outline-success my-2 my-sm-0 mr-2" type="submit">Login</button>
                    </Link>
                    <Link to="/register">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Register</button>
                    </Link>

                </form>
            </nav>
            <div className={`container-fluid ${styles.secBg}`}>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 pt-4 pb-4">
                        <TextField id="outlined-basic" label="Search" variant="outlined" className='w-100' value={query} onChange={handleSearch} />
                    </div>
                </div>
                <div className="container">
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {/* array of JSX items */}
                        {
                            data.map((item, index) =>
                                <Card
                                    title={item.title}
                                    description={item.description}
                                    startDate={item.startDate}
                                    endDate={item.endDate}
                                    phase={item.phase}
                                    id={index}

                                />

                            )
                        }
                    </Masonry>
                </div>
            </div>
        </>
    )
}

export default landing