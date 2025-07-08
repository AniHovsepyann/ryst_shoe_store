import axios from 'axios'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { ABOUT } from '../../routes'

export default function About() {
  let posts = useLoaderData()
  
  return (
    <ul>
      {posts.map((elm)=>{
        return <li key={elm.id}><Link to={`${elm.id}`}>{elm.title}</Link></li>
      })}
    </ul>
  )
}

export const getPosts = async ()=>{
  return (await axios("https://jsonplaceholder.typicode.com/posts?_limit=5")).data
}