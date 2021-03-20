import React from 'react';
import Header from '../../component/Header/Header';

import Banner from '../../component/Banner/Banner';


import WhyUs from '../../component/WhyUs/WhyUs';
import Footer from '../../component/Footer/Footer';
import Process from '../../component/Process/Process';
import How from '../../component/How/How';




class Home extends React.Component{
    
    render(){
        return(
            <div>          
<Header />
           <Banner />
           <WhyUs />
           <Process />
           <How />        
                <Footer />

            </div>

        )
    }
}

export default Home