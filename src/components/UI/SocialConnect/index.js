import React from 'react'
// import socialIcon from '../../../assets/socialIcon'
import Facebook from '../../../assets/socialIcon/facebook.png'
import Instagram from '../../../assets/socialIcon/instagram.png'
import Linkedin from '../../../assets/socialIcon/linkedin.png'

const SocialConnect = (props) => {
    return (
        <div className='socialConnect'>
            <span className='textColor font-24'>Follow me on:</span>
           <a className='socialLink' href='http://www.instagram.com/mehr.alirez'> 
               <img src={Instagram} alt='' />
            </a>
            <a className='socialLink' href= '#'> 
               <img src={Facebook}  alt=''/>
            </a>
            <a className='socialLink' href= '#'> 
               <img src={Linkedin}  alt=''/>
            </a>
        </div>
    )
}

export default SocialConnect;
