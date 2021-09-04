import React from 'react'
import Card from '../UI/Card'
import MediumHeading from '../UI/MediumHeading'
import SmallHeading from '../UI/SmallHeading'
import Button from '../UI/Button'
import LatestProject from '../../assets/images/LatestProject.png'

import './style.css'

const LatestProj = (props) => {
    return (
        <div 
          className='container' 
          style={{ marginTop:'50px', marginBottom:'50px'}}
        >
          <Card className='flexRow align-center'>
            <div
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center'
            }}
            >
              <SmallHeading text='Portfolio' />
              <MediumHeading text='Latest Project' />
              <div className='mtb-10 flexRow' style={{ justifyContent: 'center'}}>
              <Button label='Portfolios' />
              </div>
            
            </div>
            <div className='ProjImgContainer mlr-10'>
              <img src={LatestProject} alt=''/>
            </div>
          </Card>   
        </div>
    )
}

export default LatestProj;
