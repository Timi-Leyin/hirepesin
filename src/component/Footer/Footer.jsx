import React from 'react';
import './Footer.css';


function Footer(){
    return (
    <footer id="footer">
  <div class="footer">
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Jobs</a></li>
    </ul>
    <ul>
      <li><a href="" class=""><i class="fab fa-facebook"></i></a></li>
      <li><a href="" class=""><i class="fa fa-envelope"></i></a></li>
      <li><a href="" class=""><i class="fab fa-twitter"></i></a></li>
    </ul>
  </div>
  <span class="copyright">&copy;</span>
<span id="footer-year">2020 </span> 
Hirepesin - All Right Reserved
</footer>
    )
}

export default Footer;