import React from 'react';
import SmallHeading from '../UI/SmallHeading';
import MediumHeading from '../UI/MediumHeading';
import Card from '../UI/Card';
import Skill from '../UI/Skill';
import { colors } from '../../style';


 const Specs = (props) => {

    const skills = [
        {
            skillName: "ReactJS",
            desc:'Hands On experience on ReactJS',
            value: '80',
            textColor: colors.primaryColor,
            pathColor:'#D54C4C'
        },
        {
            skillName: "Redux",
            desc:'Hands on experience on Redux',
            value: '70',
            textColor: colors.primaryColor,
            pathColor:'#284E78'
        },
        {
            skillName: "JavaScript",
            desc:'Hands on experience with JS',
            value: '90',
            textColor: colors.primaryColor,
            pathColor:'#57837B'
        },
        {
            skillName: "jQuery",
            desc:'Hands on experience on jQuery',
            value: '70',
            textColor: colors.primaryColor,
            pathColor:'#FF7600'
        },
        {
            skillName: "HTML",
            desc:'Hands on experience on HTML',
            value: '90',
            textColor: colors.primaryColor,
            pathColor:'#FFD523'
        },
        {
            skillName: "CSS",
            desc:'Extensive experience with CSS',
            value: '90',
            textColor: colors.primaryColor,
            pathColor:'#7C83FD'
        },
        {
            skillName: "MySQL",
            desc:'Hands on experience on MySQL',
            value: '70',
            textColor: colors.primaryColor,
            pathColor:'#B5CDA3'
        },
        {
            skillName: "RESTAPI",
            desc:'Direct experience on RESTAPI',
            value: '70',
            textColor: colors.primaryColor,
            pathColor:'#FAEBE0'
        },
        {
            skillName: "Linux",
            desc:'Hands on experience on Linux',
            value: '80',
            textColor: colors.primaryColor,
            pathColor:'#9B72AA'
        },
        {
            skillName: "GIT",
            desc:'Hands on experience with Git',
            value: '70',
            textColor: colors.primaryColor,
            pathColor:'#CD113B'
        },
        {
            skillName: "MongoDB",
            desc:'Hands on experience on Mongo',
            value: '70',
            textColor: colors.primaryColor,
            pathColor:'#B5EAEA'
        },
        {
            skillName: "NodeJS",
            desc:'Hands On experience on Node',
            value: '80',
            textColor: colors.primaryColor,
            pathColor:'#66DE93'
        },
        
    ]
    return (
        <div className='container'>
            <Card style={{ padding: '50px'}}>
              <SmallHeading  text="Technologies"/>
              <MediumHeading text='Specializing in' />
              <div className='flexRow wrap justify-sb' style={{ padding: '30px'}}>
                  {
                    skills.map((skill, index) => (
                      <Skill 
                      key={index}
                      skillName={skill.skillName}
                      desc={skill.desc}
                      value= {skill.value}
                      textColor={colors.primaryColor}
                      pathColor={skill.pathColor}
                      />
                  ))}
               </div>
            </Card> 
           
        </div>
    );
};

export default Specs;
