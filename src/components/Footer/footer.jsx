import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'


const footer = () => {
  return (
<div className="bg2">
<div className='footer containerr'>

<div className="footer-page">

<div className='footer-ul1'>
<li>INFORMATION</li>
<ul className='foter-d'>
 <div>
 <Link to="/">Home</Link>
 </div>
 <div>
 <Link to="about">About Us</Link>
 </div>
  <div>
  <Link to="trailor">Trailor</Link>
  </div>
 <div>
 <Link to="movies">Movies</Link>
 </div>
  <div>
  <Link to="contact">Contact</Link>
  </div>
</ul>
</div>


<div className='footer-ul2'>
<li>MOVIE CATEGORIS</li>
<ul>
  <li>... Best Action</li>
  <li>... Popular Movie</li>
  <li>... Trend Movies</li>
  <li>... TV Series</li>
  <li>... English Movies</li>
  <li>... Hindi Movies</li>
  
</ul>
<div className='by'>
  <div>
  <p>@Created By Djamilov & Azik  </p>
  </div>
</div>
</div>


</div>





    </div>
</div>
  )
}

export default footer