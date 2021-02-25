import React from 'react';
import './WhyUs.css' ;
import MainImg from '../../img/why.svg';

function WhyUs(){
    return(
    <section id="why_us">

<div class="why_us">
  
<div class="cards">

<div class="card" data-aos="fade-up-right" data-aos-duration="1500" data-aos-delay="100">

<h3 class="head"> <i class="icon fa fa-eye"></i> Great UI/UX</h3>
<p class="info">
  Our Platform provides a smooth and easy to use interface.
  Built with awesome and amazing technologies,
  Our user interface makes navigating our platform more easier
</p>
</div>

<div className="card" data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="150">

<h3 class="head"> <i class="icon fa fa-building"></i>Trusted Companies</h3>
<p class="info">
We make sure that companies are well verified and accredited.
 90% of jobs postings on Hirepesin are from accredited and
 trusted companies which reduces the risk of getting 
 scammed or underpaid.
</p>
</div>

<div class="card" data-aos="fade-down-right" data-aos-duration="1500" data-aos-delay="200">

<h3 class="head"> <i class="icon fa fa-lock"></i>Secured and safe</h3>
<p class="info">
We provide top notch security for users to protect vital 
informations.
We use a lot of tools that makes our system almost
 bug free and protect vital information like your
  resume, Bank accounts details etc...
</p>
</div>





</div>
</div>

<div class="image_why">
  <div class="title" data-aos="fade-in" data-aos-delay="400" data-aos-delay="200">
    <h2>Why <span class="color">Hirepesin?</span></h2>
   <div>
    <p data-aos="fade-in" data-aos-delay="400" data-aos-delay="210">
      Are you in need of services from Artisans for a quick fix or are you an artisan who wants to offer service to users? Then you are welcome to Hirepesin. <span class='emoji'>&#128512;</span>
  
      <a class='link'  href="/about">About Us</a>
    </p>
   </div>
  </div>
  <img data-aos="zoom-in-left" data-aos-delay="400" data-aos-delay="270" src={MainImg} class='img' alt="Why Us"/>
</div>

</section>
    )
}

export default WhyUs;