import './index.css'
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Contact from '../components/Contact';

const Home = () => {

    const projects = [
        {
            img: 'https://pbs.twimg.com/media/FyB9drzWIAIl563?format=jpg&name=large',
            title: 'BlackJack w/ card-counter',
            description: 'Blackjack game with a card counter built using vanilla Javascript, HTML and CSS.',
            github: 'https://github.com/samtessema9/Project1',
            site: 'https://samtessema9.github.io/Project1/'
        },
        {
            img: 'https://preview.redd.it/wmf4pf98d4l61.png?auto=webp&s=37e925607b22489b26b0cbe0ab844b7af1692946',
            title: 'CodeReviewer',
            description: 'This application leverages the power of AI to perform a comprehensive review of your code or even entire repository to give you the best feedback possible. ',
            github: 'https://github.com/samtessema9/Project2/tree/master/code_review',
            site: 'https://code-reviewer.onrender.com/'
        },
        {
            img: 'https://media.istockphoto.com/id/1272396038/vector/new-years-party-festive-birthday-background-and-icon-set.jpg?s=612x612&w=0&k=20&c=7N-dSqBdJU1vTo1mPunaclH9uix0o1iQeTXKxq4TWy4=',
            title: 'HappyHour',
            description: 'Happy Hour App is a user-friendly application that helps users discover and explore nearby happy hour deals at various bars and restaurants.',
            github: 'https://github.com/samtessema9/HappyHour',
            site: ''
        }
    ]

    return (
        <div id="container">
            <Navbar />
            <div id="home">
                <div id="info">
                    <h1>Samuel Tessema</h1>
                    <p>  I’m a software developer with a passion for innovative solutions and meaningful projects. Skilled in JavaScript, React, express and knowledgeable in developer tools such as git, GitHub and the UNIX cli. I’m seeking hands-on opportunities to collaborate on meaningful projects and continuously improve my skills. My technical skills coupled with my adaptable nature, strong problem-solving, and effective communication skills will make me an asset in the tech industry and on your team.</p>
                </div>
                <div id="img">
                    <img src="../assets/profilepic1.jpg" />
                </div>
            </div> 
            <h1 className='title' id="p-title">Projects</h1>
            <div id="projects">
                {projects.map(project => {
                    return <Project project={project} />
                })}
            </div>
            <Contact />
        </div>
     );
}
 
export default Home;