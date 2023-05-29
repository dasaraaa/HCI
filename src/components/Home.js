import React from 'react';
import NavBar from './Navbar';
import Welcome from './WelcomeCard.js'
import JobCard from './Card';
import Footer from './Footer';
import Slider from './Slider'

export default function Home() {
  return (
    <>
    <NavBar/>
    <Welcome/>
    <JobCard/>
    <Slider/>
    <Footer/>
   
    </>
  );
}
