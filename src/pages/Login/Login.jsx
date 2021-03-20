import React,{Fragment, useContext} from 'react';
import './Login.css';
import Email from '../../context/GetStartedEmail';
import Footer from '../../component/Footer/Footer';
import Logo from '../../component/Logo/Logo';



function Login(){
    let emailCtx=useContext(Email);
    return(
<Fragment>
    <div id="login">
    <div class="col">
        <div class="logo">
             <Logo options={
                    {
                        size:'80px',
                            color:'#000',
                                primary:'#000'
                                
                    }
                } />
        </div>
    </div>
    <div class="col-2 main-form">
        <div class="logo">
            <Logo options={
                    {
                        size:'200px',
                            color:'#000',
                                text:'true',
                    }
                } />
                            <h1 class="heading">Create an Account</h1>

        </div>
        <form action="">
            
            
            <div class="form-inputs">
                
                <div class="input">
                    <label for="email">Email</label>
                    <input type="email" name="email"  id=""/>
                </div>
                
            
               
                
                      
                <div class="input">
                    <label for="password">Password</label>
                    <input type="password" name="password" id=""/>
                </div>
                

               
                
            </div>
             
                <div class="submit-input">
                    <button type="submit">Login</button>
                    <div>
                        or
                    </div>
                    <div>
                        <button class='google-sign-in'>
                           <i class="fab fa-google"></i> Login With Google
                        </button>
                    </div>
                    <a href="">Forgotten Password?</a>
                    <a href="">Already have an account</a>
                </div>
            
        </form>
    </div>

</div>
           <Footer/>
</Fragment>
    )
}

export default Login ;