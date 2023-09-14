import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Pokemon } from '@/models/pokemon'
//import styles from '@/styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })

export default function Pokedex(props:any) 
{
  return (
    <div>{props?.pokemons?.map((x:Pokemon) => {return (<div>{x.name}</div>)})}</div>
   )
 }
 
 export async function getStaticProps()
 {
   const pokemons = await fetch('http://localhost:3000/api/pokedex').then(x => {return x.json()})
 
   return {
     props: {
       pokemons
     },
     revalidate: 600
   }
 }