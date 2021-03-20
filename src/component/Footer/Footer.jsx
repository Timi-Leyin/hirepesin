import React from 'react';
import './Footer.css';


function Footer(){
    return (
    <footer id="footer">
  <div class="footer">
    <ul>
      <li><a href="">Terms & Conditions</a></li>
      <li><a href="">Privacy Policy</a></li>
    </ul>
<div class='opaque'>
      <span class="copyright">&copy;</span>
      
<span id="footer-year">2020 </span> 
Hirepesin - All Right Reserved
</div>
   
    <ul class='opaque'>
      <li><a href="" class=""><i class="icon fab fa-facebook"></i></a></li>
      <li><a href="" class=""><i class="icon fa fa-envelope"></i></a></li>
      <li><a href="" class=""><i class="icon fab fa-twitter"></i></a></li>
            <li><a href="" class=""><i class="icon fab fa-instagram"></i></a></li>

    </ul>
  </div>
</footer>
    )
}

export default Footer;