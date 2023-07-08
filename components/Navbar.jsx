import React from 'react'
import './index.css'
import StorageIcon from '@mui/icons-material/Storage';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';


const Navbar = () => {
    return ( 
        <div id="navbar">
            <CodeIcon />
            <GitHubIcon />
            <StorageIcon />
        </div>
     );
}
 
export default Navbar;