import React from "react";
import './CardComponent.css';

// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
 

const CardComponent = ( ) => {

return (
<div className="card-container">
<div className="profile-pic">
<img src ="https://m.media-amazon.com/images/I/41miU+cgrLL._SY450_.jpg" alt="your name" />
</div>


<div className="card-info">
<h1>your name here</h1>
<p>front-end developer & ui/ux enthusiast</p>
<ul className="info s">
    <li>css</li>
    <li>react</li>
    <li>node js</li>


</ul>





<div className="social-links">

<a href ="https://www.linkedin.com/in/yourprofile" targe ="_blank" rel="noopener
noreferrer">
    
    <FontAwesomeIcon icon ={faLinkedin} />linkedin</a>

<a href ="https://www.github.com/yourusername" targe ="_blank" rel="noopener
noreferrer">
    
    <FontAwesomeIcon icon ={faGithub} />Github</a>


<a href ="mailto:your-email@exemple.com" targe ="_blank" rel="noopener
noreferrer">
    
    <FontAwesomeIcon icon ={faEnvelope} />Email</a>






</div>
</div>
</div>





);
};

export default CardComponent;