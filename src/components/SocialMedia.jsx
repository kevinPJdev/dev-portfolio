import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaLinkedin, FaGithub } from 'react-icons/fa'



const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/kevinPJdev" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/kevin-jacob-7086a6134/" target="_blank" >
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia