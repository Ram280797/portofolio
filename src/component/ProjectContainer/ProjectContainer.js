import React from 'react'
import { Element } from 'react-scroll'
import Project from '../Project/Project'
import "./ProjectContainer.css"

const ProjectContainer = () => {

    const projects =[
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CvPuu04W1IdUf3kfK2lLRTyDtlYK2ILSuw7rmfQC-vYvYg6a6KhNIqGWh2kvDBdCyoA&usqp=CAU",
            title: "Calculator",
            desc:
              "This is a calculator allows the Adding,Subtract,Multiple,and Divide.",
             link:"https://reliable-parfait-0648a6.netlify.app/"
          },
      
          {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYKtEkXNQal7o8_EcVTQL1YA0ZBom4fJohQ&usqp=CAU",
            title: "Coming Soon",
            // desc:
            //   "This is a calculator allows the Adding,Subtract,Multiple,and Divide.",
            //   link:"https://reliable-parfait-0648a6.netlify.app/"
         
          },
          {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYKtEkXNQal7o8_EcVTQL1YA0ZBom4fJohQ&usqp=CAU",
            title: "Coming Soon",
            // desc:
            //   "This is a calculator allows the Adding,Subtract,Multiple,and Divide.",
            //   link:"https://reliable-parfait-0648a6.netlify.app/"
         
          },
          {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYKtEkXNQal7o8_EcVTQL1YA0ZBom4fJohQ&usqp=CAU",
            title: "Coming Soon",
            // desc:
            //   "This is a calculator allows the Adding,Subtract,Multiple,and Divide.",
            //   link:"https://reliable-parfait-0648a6.netlify.app/"
         
          },
          {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYKtEkXNQal7o8_EcVTQL1YA0ZBom4fJohQ&usqp=CAU",
            title: "Coming Soon",
            // desc:
            //   "This is a calculator allows the Adding,Subtract,Multiple,and Divide.",
            //   link:"https://reliable-parfait-0648a6.netlify.app/"
         
          },
          {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYKtEkXNQal7o8_EcVTQL1YA0ZBom4fJohQ&usqp=CAU",
            title: "Coming Soon",
            // desc:
            //   "This is a calculator allows the Adding,Subtract,Multiple,and Divide.",
            //   link:"https://reliable-parfait-0648a6.netlify.app/"
         
          }
          
    ]

  return (
    <Element className="projectContainer" id="projects">
        <h1>Projects</h1>
        <p>Here are Some Projects Which I done for making Lives of People easy</p>
<div className='projectContainer_projects'>
{
projects.map((project,index)=>{
    return(
        <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}/>
    )
})
}
</div>
    </Element>
  )
}

export default ProjectContainer