import React from 'react'
import {JobCard, CardWrapper} from './style.js'
import gameEducaImage from '../../assets/gameEduca.svg'

export default function workData() {
    const projects =[
        {
            title: 'GameEduca',
            image: gameEducaImage,
            worked: 'Fullstack developer',
            time: '3 months',
            contract: 'freelancer',
            tech:['javaScript', 'node.js', 'react.js', 'postgreSQL' ],
            aboutProject: 'At this project, a school platform was created with the objective of showing some educational games.',
            usefulKnowledge: ['Create avatars', 'animations', 'application deploy', 'auto bot'],
            aboutCompany: 'GameEduca is a startup that offers educational games for schools with the aim of changing the old education system, innovating the Brazilian education scenario.'
        },
        {
            title: 'H2R',
            worked: 'Front-end developer',
            time: '6 months',
            contract: 'intern',
            tech:['javaScript', 'JAVA', 'angular', 'ionic' ],
            aboutProject: 'In this company, I worked in a bunch of things, but it is relevant to say an app calls voter that is basically a politician social media, and a integrate API with Whatsaap in JAVA',
            usefulKnowledge: ['object orientation', 'routes', 'design', "integrate API's"],
            aboutCompany: 'H2R is a startup that made software as a service, they make sites, apps, and API. We also have an e-commerce platform calls H2R-ecommerce.'
        },
        {
            title: 'EthicsNet',
            worked: 'Fullstack developer',
            time: 'current',
            contract: 'freelancer',
            tech:['javaScript', 'node.js', 'react.js', 'mongoDB' ],
            aboutProject: 'At this project, I worked with a website and a Chrome extension in order to get user notes and store them in a database to feed artificial intelligence',
            usefulKnowledge: ['object orientation', 'routes', 'design', "integrate API's"],
            aboutCompany: 'H2R is a startup that made software as a service, they make sites, apps, and API. We also have an e-commerce platform calls H2R-ecommerce.'
        }
    ]
    function getProjects(){
        console.log(projects);
        return(
            <CardWrapper>
            {
                projects.map(({title, worked, image,  time, contract, tech, aboutCompany, aboutProject, usefulKnowledge}) => {
                    return(
                        <JobCard>
                            {title}
                            <img src={image} alt={title}/>
                        </JobCard>
                    )
                })
            }   
            </CardWrapper>
        )
    }
    return (
        <div>
           {getProjects()}
        </div>
    )
}
