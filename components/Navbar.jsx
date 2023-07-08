import React from 'react'
import './index.css'
import StorageIcon from '@mui/icons-material/Storage';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';


const Navbar = () => {
    return ( 
        <div id="navbar">
            <CodeIcon className='icon' fontSize='large'/>
            <GitHubIcon className='icon' fontSize='large'/>
            <StorageIcon className='icon' fontSize='large'/>
        </div>
     );
}
 
export default Navbar;