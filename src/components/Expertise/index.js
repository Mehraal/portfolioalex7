import React from 'react'
import MediumHeading from '../UI/MediumHeading'
import SmallHeading from '../UI/SmallHeading'
import Card from '../UI/Card'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import { colors } from '../../style'
import me from '../../assets/images/me-left.PNG'
import './style.css'
import SocialConnect from '../UI/SocialConnect'


// const percentage = 70,

const Expertise = (props) => {
    return (
        <div className='container' style={{ marginTop: '40px'}}>
            <div className='meLeftImgContainer'>
                <img src={me} alt=''/>
            </div>
            <div style={{ padding: '50px 0'}}>
                <SmallHeading  text='Expertise' />
                <MediumHeading text='Special Skills' />
            </div>
            <Card style={{padding:'20px', width:'320px', margin:'50px auto'}}>
              <div className='flexRow align-center'>
                <div style={{ width:'80px', height:'80px'}}>
                <CircularProgressbar 
                value= '70' 
                text={`${70}%`}
                styles={buildStyles({
                  textColor: colors.primaryColor,
                  pathColor: '5089C6',
                })}
            />

                </div>
              <h2 className='textColor mlr-10 font-22' style={{ marginTop: "30px"}}>Development</h2>
              </div>
              <p className='grey mtb-10 font-12 align-center'> 
              JS and React are the dominant Technologies
              </p>
                
            </Card>

            <div>
                <SocialConnect />
            </div>
            
        </div>
    )
}

export default Expertise;
