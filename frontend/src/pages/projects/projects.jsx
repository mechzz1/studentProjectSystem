import React, { useState, useEffect } from 'react'
import Card from '../../components/card/appCard'
import Masonry from 'react-masonry-css'
import toast from 'react-hot-toast';
import axios from 'axios'

function projects() {
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    };
    const [data, setData] = useState(null);
    const arr = [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem asperiores dolorum consequuntur! Est fuga odit aperiam nobis quisquam quas! Ea quisquam reiciendis id quos architecto, labore enim incidunt dolorem voluptates at nisi!"
    ]
    useEffect(() => {
        const userData = sessionStorage.getItem('user');
        let token = null;
        if (userData !== null) {
            let temp = JSON.parse(userData);
            token = temp.token
        }
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:13000/users/getUserProjects',
            headers: {
                'Content-Type': 'application/json',
                'access-token': `${token}`
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
    return (
        <>
            <div className="container">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {/* array of JSX items */}
                    <Card message={arr[0]} />
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                    <Card />

                </Masonry>
                <p>
                </p>

            </div>
        </>
    )
}

export default projects