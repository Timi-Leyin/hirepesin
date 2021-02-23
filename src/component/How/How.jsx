import React from 'react';
import MainImg from '../../img/works.png'
import './How.css'

function How(){
    return(
        <section id="how">


 <div class="how">
<div class="_left">
  <div class="title" data-aos="fade-in" data-aos-delay="400" data-aos-delay="200">
    <h2>How it <span class="color">Works</span></h2>
  </div>
  <img data-aos="zoom-in" data-aos-delay="400" data-aos-delay="210" src={MainImg} loading="lazy" />
</div>


<div class="_right">

<div class="card" data-aos="fade-up" data-aos-delay="400" data-aos-delay="205">
  <h3>Search For Artisans</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Maxime, autem? Eum ab natus delectus accusamus molestias
      excepturi quos ea quasi amet quod cumque eveniet non,
       eius facilis, architecto vel! Neque.</p>
</div>

<div class="card" data-aos="fade-up" data-aos-delay="400" data-aos-delay="250">
  <h3>Get Proposal</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Maxime, autem? Eum ab natus delectus accusamus molestias
      excepturi quos ea quasi amet quod cumque eveniet non,
       eius facilis, architecto vel! Neque.</p>
</div>

<div class="card" data-aos="fade-up" data-aos-delay="400" data-aos-delay="290">
  <h3>Accept Proposal</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Maxime, autem? Eum ab natus delectus accusamus molestias
      excepturi quos ea quasi amet quod cumque eveniet non,
       eius facilis, architecto vel! Neque.</p>
</div>


<div class="card" data-aos="fade-up" data-aos-delay="400" data-aos-delay="310">
  <h3>Get Your Work Done</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Maxime, autem? Eum ab natus delectus accusamus molestias
      excepturi quos ea quasi amet quod cumque eveniet non,
       eius facilis, architecto vel! Neque.</p>
</div>



</div>


 </div>
</section>
    
    )
}


export default How;