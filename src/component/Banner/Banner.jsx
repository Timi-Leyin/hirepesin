import React,{useState} from 'react';
import {Link} from 'react-router-dom';
//import {Validate} from './Validate';
import './Banner.css';
import Email from '../../context/GetStartedEmail';
import BannerImg from '../../img/hero-img.svg';
import playStore from '../../img/pla.png';
import ios from '../../img/spp.png';




function Banner(){
    let [getStartEmail, setEmail]=useState()
    return(
    <React.Fragment>
<Email.Provider value={getStartEmail}>
<Email.Consumer>
{
    (email)=>{
        console.log(email)
          return(
           <React.Fragment>
            <section id="banner" className="hero">
<div className="banner__content">

    <div className="__content_left">
        <div className="ratings">
        <i className="--icon fa fa-star" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100"></i>
        <i className="--icon fa fa-star" data-aos="fade-down" data-aos-duration="600" data-aos-delay="150"></i>
        <i className="--icon fa fa-star" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200"></i>
        <i className="--icon fa fa-star" data-aos="fade-down" data-aos-duration="600" data-aos-delay="250"></i>
        </div>
        <h1>Get Quality Services From Artisans</h1>
    <p>
      We strive to connect our users to top 
      notch and professional artisans and handymen near your
      location.Using hirepesin, you have access to coneect to users
      who are in need of services of arisans who are seeking for quick jobs.
    </p>
    <label for="email" className="error">Enter a valid Email Address</label>
<form action="http://localhost:3000/register">
    <div  id='get_started'>
    <input type="email" value={email} name="get-started-email" placeholder="Email Address" onInput={(e)=>{
            setEmail(getStartEmail=e.target.value)
        }} id="email-validate" />
<button type="submit">Get Started</button>
</div>   
</form>
<div class='get-app'>
   <Link to={'/'}> <img src={playStore} alt=""/></Link>
      <Link to={'/'}>  <img src={ios} alt=""/></Link>

</div>
</div>

    <div className="__content_right" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
    

        <img src={BannerImg} alt="Banner Image" width="90%"/>
    </div>

</div>

    </section>
        
 <div id="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
                fill="var(--dark-color)"
                fill-opacity="1"
                d="M0,160L34.3,176C68.6,192,137,224,206,208C274.3,192,343,128,411,101.3C480,75,549,85,617,96C685.7,107,754,117,823,144C891.4,171,960,213,1029,197.3C1097.1,181,1166,107,1234,69.3C1302.9,32,1371,32,1406,32L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
            ></path>
        </svg>
    </div>
          
          <Jobs />
           </React.Fragment>
          )
    }
}
</Email.Consumer>
</Email.Provider>
        </React.Fragment>
   
    )
}
export function Jobs(){
    return(
     <section id="jobs"> 
 <div>
  
 <div class="jobs ">

  <div class="card">
    <div class="avatar"></div>
    <div class="profile_info">
      <h4 class="name">Backend Developer</h4>
      <p class="flex location"><span class="fa fa-map-marker-alt"></span><span class="--location">Australia</span></p>
    </div>
    <div class="icon fa fa-briefcase"></div>
  </div>
  
  
  <div class="card">
    <div class="avatar"></div>
    <div class="profile_info">
      <h4 class="name">Human Resources D</h4>
      <p class="flex location"><span class="fa fa-map-marker-alt"></span><span class="--location">Lagos, Nigeria</span></p>
    </div>
    <div class="icon fa fa-briefcase"></div>
  </div>
  
  
  <div class="card">
    <div class="avatar"></div>
    <div class="profile_info">
      <h4 class="name">Content Writer</h4>
      <p class="flex location"><span class="fa fa-map-marker-alt"></span><span class="--location">London, UK</span></p>
    </div>
    <div class="icon fa fa-briefcase"></div>
  </div>
  
  
  </div>
  <div class="text-info">
   <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, odio.
   </p>
   <a href="" class="color">Get Started</a>
  </div>
 </div>

<div>
 <div class="job-tags">
 <a class="" href="#">
  <div class="btn">
   Engineering
  </div>
 </a>

 <a class="" href="#">
  <div class="btn">
   Engineering
  </div>
 </a>

 <a class="" href="#">
  <div class="btn">
   Engineering
  </div>
 </a>

 <a class="" href="#">
  <div class="btn">
   Engineering
  </div>
 </a>

 <a class="" href="#">
  <div class="btn">
   Liko
  </div>
 </a>

 <a class="" href="#">
  <div class="btn">
  Developer
  </div>
 </a>

 <a class="" href="#">
  <div class="btn">
  Customer Service
  </div>
 </a>


 </div>
 

   </div>

 
 
</section>

    )
}
export default Banner;