import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Banner from './component/Banner/Banner';
import Why from './component/WhyUs/WhyUs';
import Process from './component/Process/Process';
import How from './component/How/How';
import   Footer  from './component/Footer/Footer';
import GetStartedEmail from './context/GetStartedEmail';


function App() {
    console.log(React.useContext(GetStartedEmail))
  return (
    <section className="body_container_root">
      <Header />
      <Banner />
      <Why />
      <Process />
      <How />
      <Footer />

    </section>
  );
}

export default App;
