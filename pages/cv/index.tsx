import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })

export default function CV(props:any) {
  return (
   <div>{props.aboutMe.title}</div>
  )
}

export async function getStaticProps()
{
  const aboutMe = await fetch('http://localhost:3000/api/aboutMe').then(x => {return x.json()})

  return {
    props: {
      aboutMe
    },
    revalidate: 600
  }
}
