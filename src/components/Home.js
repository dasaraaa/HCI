import React from 'react';
import NavBar from './Navbar';
import Welcome from './WelcomeCard.js'
import Jobs from './Card';
import Footer from './Footer';
import Slider from './Slider'
import JobCard from './JobCard';

export default function Home() {
  return (
    <>
    <NavBar/>
    <Welcome/>
    <Jobs/>
    <JobCard/>
    <Slider/>
    <Footer/>
   
    </>
  );
}
