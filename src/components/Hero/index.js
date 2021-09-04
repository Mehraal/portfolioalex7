import React from 'react';
import me from "../../assets/images/me-right.PNG";
import './style.css';
import Button from '../UI/Button';

const Hero = (props) => {
    return (
        <div className='container' style={{ marginTop: "70px" }}>
          <div className='flexRow justify-sb'>
            <div style={{marginTop: '200px'}}>
                <p className='uppercase bold-500 textColor ls-1 mtb-10'>
                  <span className='primaryColor'>Hello,</span> I am Alex Mehr
                </p>
                <h1 className='textColor ls-1 mtb-10'>Software Engineer</h1>
                <p className='font-20 grey mtb-10'>FullStack Developer</p>
              <div className='flexRow align-center' style={{ margin: '30px 0' }}>
                <div> 
                  <Button label='HIRE ME!'/>
                </div>
                <div className='mlr-10'>
                  <Button label='Download CV' inverse={true}/>
                </div> 
              </div>
                
            </div>
            <div className="meRightImgContainer">
                <img src={me} alt="" />
            </div>

          </div>
           
            
        </div>
    )

}

export default Hero;
    

