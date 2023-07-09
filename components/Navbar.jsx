import React from 'react'
import './index.css'
import StorageIcon from '@mui/icons-material/Storage';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';


const Navbar = () => {
    return ( 
        <div id="navbar">
            <a>
                <ArticleOutlinedIcon className='icon' fontSize='large'/>
                <p>resume</p>
            </a>
            <a href='https://github.com/samtessema9' target='_blank'>
                <GitHubIcon className='icon' fontSize='large'/>
                <p>github</p>
            </a>
            <a>
                <CodeIcon className='icon' fontSize='large'/>
                <p>projects</p>
            </a>
            <a>
                <CodeIcon className='icon' fontSize='large'/>
                <p>projects</p>
            </a>
        </div>
     );
}
 
export default Navbar;