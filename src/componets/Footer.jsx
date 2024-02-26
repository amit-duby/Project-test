// import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'
import myimg from '../assets/myImg.png'
const Footer = () => {
  return (
   <footer>
    <div>
    <img src={myimg} alt="footerimg" />
    <h2>AMIT DWIVEDI</h2>
    <p>Motivation is temporary,but discipline last forever.</p>
     </div>
     <aside>
        <h2> Social Media</h2>
        <article>
            {/* <a href="https://www.youtube.com/@techriseworld2266" target='blank'><AiFillYoutube/></a> */}
            <a href="https://github.com/amit-duby" target='blank'><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/amit-dwivedi-a787ba219/" target='blank'><AiFillLinkedin/></a>

        </article>
     </aside>
      <a id='arraw' href="#home">
        <AiOutlineArrowUp/>
        </a>
   </footer>
  )
}

export default Footer