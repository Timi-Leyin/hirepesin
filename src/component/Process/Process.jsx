import React from 'react';
import './Process.css'
import MainImg from '../../img/process.svg'


function Process(){
return(

<section id="process">
  <div class="title">
    <h2>Process</h2>
    <p>Get services from Artisans for a quick fix or become an artisan by following these in easy steps  <span class='emoji'>&#128512;</span>.</p>
    <img data-aos="zoom-in" data-aos-delay="200" src={ MainImg} width="300" />
  </div>

  <div class="before" data-aos="fade-in">
    PROCESS
  </div>

  <div class="processes">

    <div class="process" data-aos="zoom-in" data-aos-delay="200">


      <div> 
         <h2 class="head" data-aos="fade-up-left" data-aos-duration="800" data-aos-delay="250">  <div class="i--">1</div>Join</h2>
        <br />
        <p class="info" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="210">Create an Account.</p>
        <p class="info" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="220">Verify your Account.</p>
        <p class="info" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="230">Login to your Account.</p>
     
      </div>
    </div>

    <div class="process"  data-aos="zoom-in" data-aos-delay="200">


      <div> 
         <h2 class="head" data-aos-duration="800" data-aos="fade-up-left" data-aos-delay="250">  <div class="i--">2</div>Post a Job</h2>
        <br />
        <p class="info"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="210">Get proposal from artisans.</p>
        <p class="info"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="220">Pay Artisans in advance.</p>
        <p class="info"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="230">Get your job Done.</p>
     
      </div>
    </div>

   </div>

</section>

)
}


export default Process