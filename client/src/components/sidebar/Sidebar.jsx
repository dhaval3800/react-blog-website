import React from 'react'
import './sidebar.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    const [cats, setCats] = useState([])

    useEffect(() => {

        const getCats = async () => {
            const res = await axios.get('/categories')
            setCats(res.data)
        }
        getCats()
    }, [])

    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className='sidebarImage' src="https://images.pexels.com/photos/5576289/pexels-photo-5576289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium odit perspiciatis quibusdam</ p>
            </div>
            <div className='sidebarItem'>
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {
                        cats.map((c) => (
                            <Link to={`?cat=${c.name}`} className='link'>
                                <li className="sidebarListItem">{c.name}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
