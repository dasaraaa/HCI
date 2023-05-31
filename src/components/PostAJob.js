import React from 'react';
import '../styles/postjob.css'

export default function PostAJob() {
  return (
    <div className='body'>
      <h1 className="job--h1">Post a Job </h1>
     
     <div className="container">
       <div className="post-a-job">
            
         
         <form>
       <label for="job--title">Job Title</label>
       <input type="jobtile" className="input-box" placeholder="Job Title" id="job--title"/>
       <label for="company--id">Company</label>
       <input type="company" className="input-box" placeholder="Company" id="company--id"/>
       <label for="Location--id">Location</label>
       <input type="Location" className="input-box" placeholder="Location" id="Location--id"/>
       <h3>Job Type</h3>
       <p><span/><input type="checkbox"/>Full Time </p>
         <p><span/><input type="checkbox"/>Part time </p>
           <p><span/><input type="checkbox"/>Free lancer </p>
             <p><span/><input type="checkbox"/>Internship </p>
             <h2>Job description </h2>
             <input type="jobdescription" className="inputbox" placeholder="Job Description"/>
             <button type="button" className="signUp-btn">Post</button>
       
       
       </form>
     </div>
 
 <div className="right-side">
     <div className="contact-us">
       <h2> Contact Us</h2>
       <h3>Adress</h3>
       <p><a href="#">203 Fake St.Mountain View , San Francisco California</a></p>
       <h3>Phone</h3>
       <p><a href="#">044378962393</a></p>
       <h3>Email</h3>
       <p><a href="#">erionashala20@gmail.com</a></p>
 
       
 
 
     </div>
 
     <div className="more-info">
       <h2> More Info</h2>
       <p>At Job Bliss , we believe in the power of transforming lives and making a positive impact.
          Our journey began with a vision to help people find the job of their dreams and we strive
         to deliver excellence in everything we do . </p>
         </div>
     </div>
 
 </div>
 
     </div>
  );
}
