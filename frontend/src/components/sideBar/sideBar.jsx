import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, Outlet, useLocation } from 'react-router-dom';
import { LiaLuggageCartSolid } from "react-icons/lia";
import { MdDashboard } from "react-icons/md";
import styles from './sideBar.module.css'
import { RiAliensFill } from "react-icons/ri";
import NavBar from '../navBar/navBar';
function sideBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
  
    const currentRoute = useLocation();
  return (
    <>
    <nav className={`${styles.sidebar} ${isSidebarOpen ? '' : styles.close}`}>
      <header>
        {/* ... Other HTML content ... */}
        {/* <span className={`${styles.toggle}`}>
          <div className='d-flex align-items-center m-auto pr-1 pl-1'>
            {isSidebarOpen ? <IoIosArrowBack onClick={toggleSidebar} /> : <IoIosArrowForward onClick={toggleSidebar} />}
          </div>
        </span> */}
        {/* <i className={`bx bx-chevron-right ${styles.toggle}`} onClick={toggleSidebar}>

                  </i> */}

      </header>

      <div className={styles['menu-bar']}>
        <li className={`${styles.mode} ${styles.bgNone} mb-5`}  >
          <div className='ml-3 mr-3'>
            <RiAliensFill size={25} />
          </div>
          <span className={`${styles['mode-text']} ${styles.text}`}>Project Hub</span>

        </li>
        <Link to="/dashboard/projects" className={styles.barLink} >

          <li className={`${currentRoute.pathname == "/dashboard/projects" ? styles.mode : ""}`} >
            <div className='ml-3 mr-3'>
              {/* <CiHome size={25} /> */}
              <MdDashboard size={25} />
            </div>
            <span className={`${styles['mode-text']} ${styles.text}`}>My Projects</span>

          </li>
        </Link>
        <Link to="/dashboard/create" className={styles.barLink} >

          <li className={`${currentRoute.pathname == "/dashboard/create" ? styles.mode : ""}`} >
            <div className='ml-3 mr-3'>
              {/* <CiHome size={25} /> */}
              <MdDashboard size={25} />
            </div>
            <span className={`${styles['mode-text']} ${styles.text}`}>Add Projects</span>

          </li>
        </Link>
      
      </div>
    </nav>
    <section className={styles.home}>
  <NavBar/>
      <div className="container-fluid">
        {
          currentRoute.pathname == "/dashboard/projects" ?
            <div className={styles.mainHeader}>
              <MdDashboard size={35} className='mb-2 mr-2' />

              My Projects</div> :
            currentRoute.pathname == "/dashboard/create" ? <div className={styles.mainHeader}>
              <LiaLuggageCartSolid size={35} className='mr-2 mb-2' />
              Add Project</div>
              : currentRoute.pathname == "/dashboard/module" ? <div className={styles.mainHeader}>
                <LiaLuggageCartSolid size={35} className='mr-2 mb-2' />
                Module Management</div> : currentRoute.pathname == "/dashboard/organizations" ? <div className={styles.mainHeader}>
                <LiaLuggageCartSolid size={35} className='mr-2 mb-2' />
                Module Management</div>:""
        }
        <Outlet />
      </div>
    </section>
  </>
  )
}

export default sideBar