import './index.css'
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div id="container">
            <Navbar />
            <div id="home">
                <div id="info">
                    <h1>Samuel Tessema</h1>
                    <p>  I’m an aspiring software developer with a passion for innovative solutions and meaningful projects. Skilled in JavaScript, React, express and knowledgeable in developer tools such as git, GitHub and the UNIX cli. I’m seeking hands-on opportunities to collaborate on meaningful projects and continuously improve my skills. My technical skills coupled with my adaptable nature, strong problem-solving, and effective communication skills will make me an asset in the tech industry and on your team.</p>
                </div>
                <div id="img">
                    <img src="../assets/profilepic1.jpg" />
                </div>
            </div> 
        </div>
     );
}
 
export default Home;