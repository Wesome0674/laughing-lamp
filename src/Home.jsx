import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <ul>
           <Link to={"/services"}> <li>lien 1</li> </Link>
           <Link to={"/contact"}> <li>lien 2</li> </Link>
        </ul>
    </div>
  )
}
