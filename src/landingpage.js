import React, {Component} from 'react';
import Gallery from './carousel';


class Landing extends Component{

    render(){
        return(
            <div className="container">
            


    <div id="ma">
<div style={{backgroundColor:'#D3D3D3'}}>
    <Gallery />
    
    <div >
      <div>
        <div style={{marginRight:'110px'}}><b>DAILY GREENS </b>  <br /> </div>
        <div style={{marginRight:'40px'}}><span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        4.8 (183 reviews)<br /><br />

      </div>
       <div style={{float:'left'}}> Multvitamins from 39 farm-fresh ,veggies, fruits and antioxidant-rich
        superfoods. In one deliciously effervescent tablet. Simply drop,<br /> fizz, green up.
        <br /></div><div style={{float:'left', marginLeft:'10px'}}>
        -Whole food nutrition to fill the gaps in your diet <br />
        -Stimulates micro-flora in the gut and restores digestive health <br />
        -Boosts immunity, supports radiant skin and detoxifies the body.
        </div></div><br />
        <div style={{float:'left', marginLeft:'20px'}}>
        <b> Packs: </b>
            <br />
            Rs. 590
            <br />
           </div> 
           <br /><br />
           <hr />
            <table style={{marginLeft:'20px',marginTop:'200px', border:'1px solid black' }}>
            <tr style={{ border:'1px solid black' }}>
                Grab Bundle Deals</tr>
                <tr >
                    Buy (Pack of 2) to get 5% off
                </tr>
                <tr style={{ border:'1px solid black' }}>
                    Buy (Pack of 4) to get 8% off
                </tr>
                <tr style={{ border:'1px solid black' }}>
                    Buy (Pack of 6) to get 10% off
                </tr>
                </table>
                <br />
                <div style={{float:'left', marginLeft:'20px'}}>
                <b> Share: </b>
                <i class="fa fa-facebook"></i>
                &nbsp;  &nbsp;
                        <i class="fa fa-twitter"></i>&nbsp;  &nbsp;
                          <i class="fa fa-envelope"></i></div>
                       <br />
    </div>                    
                        <div style={{color:'green', float:'left', marginLeft:'20px'}}>
                        <br /><b>Health made easy.</b>
                        </div>
                        <img src={require('./img6.jpeg')} /><br /><br />
                        <div style={{float:'left', marginLeft:'20px'}}>
                        From <br />
                        <div style={{color:'green'}}>
                        <b>farm <br />to fizz.</b>
                        </div>
                       
                        </div>
                        <br /> <br /> <br /> <br />
                        <div style={{float:'left', marginLeft:'20px'}}>
                        <b>39 organic ingradients</b>
                        <br /></div>
                        <table>
                        <tr>
                        
                        <td>
                            Spinach 
                            </td>
                            <td>
                            Alfalfa 
                            </td>
                        </tr>
                        <tr>
                        
                        <td>
                            Kale 
                            </td>
                            <td>
                            Moringa
                            </td>
                        </tr>       <tr>
                        
                        <td>
                            Aloe Vera 
                            </td>
                            <td>
                            Basil
                            </td>
                        </tr>       <tr>
                        
                        <td>
                            Wheatgrass 
                            </td>
                            <td>
                            Acai 
                            </td>
                        </tr>       <tr>
                        
                        <td>
                            Brussel sprouts 
                            </td>
                            <td>
                            Blueberry
                            </td>
                        </tr>       <tr>
                        
                        <td>
                            Spirulina
                            </td>
                            <td>
                            Turmeric
                            </td>
                        </tr>       <tr>
                        
                        <td>
                            Chlorella
                            </td>
                            <td>
                            Cinnamon
                            </td>
                        </tr>       <tr>
                        
                        <td>
                            Broccoli
                            </td>
                            <td>
                            Green Tea 
                            </td>
                        </tr>
                        <tr>
                        
                        <td>
                            Ashwagandha
                            </td>
                            <td>
                            +22 more ingredients
                            </td>
                        </tr>
                        </table>

            <div className="flexi">
                <div className="col-sm-1">
                    <div  className="ratio img-responsive img-circle" style={{backgroundImage: 'url(${http://trovacamporella.com/img/trovacamporella-fiat500.png)', width:'100%' , height: 'auto' }} ></div>
                </div>
            <div className="col-sm-1">
                    <div  className="ratio img-responsive img-circle" style={{backgroundImage: 'url(${http://trovacamporella.com/img/trovacamporella-fiat500.png)' , width:'100%' , height: 'auto' }}></div>
                </div>
                <div className="col-sm-10">
                    <div  className="ratio img-responsive img-circle" style={{ backgroundImage: 'url(${http://trovacamporella.com/img/trovacamporella-fiat500.png)', width:'100%' , height: 'auto' }} ></div>
                </div>
    </div>
    </div>
</div>

</div>
        )
    }
}

export default Landing;