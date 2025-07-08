import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { ABOUT } from '../../routes';
import axios from 'axios';

export default function Post() {
// console.log(useLoaderData());


  return (
    <>
      <p>Post {useParams().id}</p>
      <ul>
        <li>
          <p>{useLoaderData().title}</p>
          <p>{useLoaderData().body}</p>
        </li>
      </ul>
      <Link to={ABOUT}>About</Link>
    </>
  )
}

export const getSpeacialPost = async ({ params: { id } }, b) => {
  // console.log(a, b);

  return (await axios(`https://jsonplaceholder.typicode.com/posts/${id}`)).data
}