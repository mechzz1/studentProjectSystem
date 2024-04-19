import React ,{ useState, useEffect } from 'react'
import Card from '../../components/card/appCard'
import Masonry from 'react-masonry-css'
import toast from 'react-hot-toast';
import axios from 'axios'
import styles from './landing.module.css'
import NavBar from '../../components/navBar/navBar'
function landing() {
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    };
    const [data, setData] = useState([]);
    const arr = [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem asperiores dolorum consequuntur! Est fuga odit aperiam nobis quisquam quas! Ea quisquam reiciendis id quos architecto, labore enim incidunt dolorem voluptates at nisi!"
    ]
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
    return (
        <>
            
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">ProjectHub</a>
                <form className="form-inline">
                        <button className="btn btn-outline-success my-2 my-sm-0 mr-2" type="submit">Login</button>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Register</button>

                </form>
            </nav>
            <div className="container-fluid">

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