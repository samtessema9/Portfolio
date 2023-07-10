import React from 'react'
import './index.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';


const Navbar = () => {

    const scrollToSection = () => {
        const section = document.getElementById('footer');
        section.scrollIntoView({ behavior: 'smooth' });
      };

    return ( 
        <div id="navbar">       
            <a href='https://www.linkedin.com/in/samuel-tessema-8324bb271/' target='_blank'>
                <LinkedInIcon className='icon' fontSize='large'/>
                <p>linkedIn</p>
            </a>
            <a href='https://github.com/samtessema9' target='_blank'>
                <GitHubIcon className='icon' fontSize='large'/>
                <p>github</p>
            </a>
            <a href="/Sam_Tessema_Technical_Resume.pdf" target='_blank' rel="noopener noreferrer">
                <ArticleOutlinedIcon className='icon' fontSize='large'/>
                <p>resume</p>
            </a>
            <a onClick={scrollToSection}>
                <ConnectWithoutContactIcon className='icon' fontSize='large'/>
                <p>contact-me</p>
            </a>
        </div>
     );
}
 
export default Navbar;