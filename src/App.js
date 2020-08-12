import React from 'react';
import Main from './main';
import './App.css';
import {Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <div className="demo-big-content">
    <Layout>
        <Header className="headet" style={{ backgroundColor: 'white'}} scroll>
      <div style={{color:'black', float:'left', marginLeft:'-60px'}}>
      <button class="material-icons" onclick="history.go(-1);" style={{fontSize: '0px'}}>
      <i class="fa fa-bars" style={{fontSize: '30px'}}></i>
           </button>
           
 </div>            <div class="sidenav">
            <Navigation>
            <Link to="/landing">SHOP</Link>
            <Link to="/resume">INGREDIENTS</Link>
                <Link to="/">WHY EFFERVESCENCE</Link>
                <Link to="/contact">HOW WE DO IT</Link>
                <Link to="/">ABOUT US</Link>
                <Link to="/">STORE LOCATOR</Link>
                <Link to="/">CONTACT US</Link>
                <Link to="/">LOGIN or REGISTER</Link>
            </Navigation>
            </div>
            <div style={{ float:'right',marginLeft:'1000px', backgroundColor:'black'}}>
            <i class="fa fa-user-o"></i>
            <i class="fa fa-shopping-bag"></i>
            </div>
        </Header>
        <Drawer >
            <img src={require('./img8.jpg')} style={{width:'90px', height:'90px'}}/>
            <Navigation>
            <Link to="/landing">SHOP</Link>
            <Link to="/resume">INGREDIENTS</Link>
                <Link to="/">WHY EFFERVESCENCE</Link>
                <Link to="/contact">HOW WE DO IT</Link>
                <Link to="/">ABOUT US</Link>
                <Link to="/">STORE LOCATOR</Link>
                <Link to="/">CONTACT US</Link>
                <Link to="/">LOGIN or REGISTER</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />      
        </Content>
    </Layout>
</div>
    </div>
  
  );
}
       export default App;