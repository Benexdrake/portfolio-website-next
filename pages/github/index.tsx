import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Project } from '@/models/project'
import GithubCard from '@/components/github/github_card'
import axios from 'axios'
//import styles from '@/styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })

export default function Github(props:any) {
  return (
   <div className='container'>
    <div className='row'>
      {props.projects.map((x:Project) => { return (
      <div className='col-4' style={{['marginBottom']: '20px'}}>
        <GithubCard project={x}/>
        </div>
        )})}
      </div>
    </div>
  )
}

export async function getServerSideProps()
{
  const projects = await axios.post('http://localhost:3000/api/github/projects', {key:process.env.PROTECT_API}).then(x => {return x.data});


  return {
    props: {
      projects
    }
  }
}
