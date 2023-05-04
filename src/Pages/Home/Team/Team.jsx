import React, { useEffect, useState } from 'react';
import SingleTeam from '../SingleTeam/SingleTeam';
import { Link } from 'react-router-dom';

const Team = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/teams')
            .then(res => res.json())
            .then(data => setTeams(data))
            .catch(error => console.log(error))
    }, [])
    // console.log(teams);
    return (
        <div className='grid md:grid-cols-2 md:gap-8 mt-[130px]'>
            <div className='order-last'>
               <SingleTeam teams={teams}></SingleTeam>
            </div>
            <div className='text-left mt-10'>
                <h1 className='text-5xl font-light text-gray-700'>We Have Awesome team in <span className='text-6xl text-primary font-bold'>Food Master</span> Restaurant.</h1>
                <p className='text-gray-600 mt-6 md:pr-48 mb-5'>Welcome to our hotel! Our team is made up of a diverse group of individuals who are passionate about hospitality and dedicated to making your stay with us a memorable one. From our friendly front desk staff to our skilled chefs and housekeeping team, everyone works together to ensure your needs are met and your experience is top-notch. <span className='text-xl text-primary font-bold'>Noted!</span>

Each team member brings a unique set of skills and experience to the table, making our hotel a dynamic and welcoming environment. Whether you need assistance with your room, recommendations for local attractions, or simply a friendly smile, our team is here to help.

We take pride in providing exceptional service and creating a warm, inviting atmosphere for our guests. We look forward to welcoming you to our hotel and introducing you to our team!</p>
                <Link><button className='btn btn-primary text-white'>Explore Hotel</button></Link>
            </div>
        </div>
    );
};

export default Team;