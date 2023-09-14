import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Project } from '@/models/project'
//import styles from '@/styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })

export default function Github(props:any) {
  return (
   <div>{props.projects.map((x:Project) => { return (<div>{x.name}</div>)})}</div>
  )
}

export async function getStaticProps()
{
  const projects = await fetch('http://localhost:3000/api/github/projects').then(x => {return x.json()});


  return {
    props: {
      projects
    },
    revalidate: 600
  }
}
