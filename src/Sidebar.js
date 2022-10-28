import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material';

const Sidebar = () => {

    const recentItem = (topic) => {
       return <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    }
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80" alt="" />
            <Avatar className="sidebar__avatar"/>
            <h2>Aylin Hyusmen</h2>
            <h4>ahyusmen@icloud.com</h4>
        </div>

        <div className='sidebar__stats'>
            <div className="sidebar__stat">
                <p>Who viewed your profile</p>
                <p className="sidebar__statNumber">1,337</p>
            </div>
            <div className="sidebar__stat">
                <p>Views of your post</p>
                <p className="sidebar__statNumber">8,008,135</p>
                </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar