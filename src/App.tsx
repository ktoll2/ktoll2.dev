import './App.css';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className={`App font-sans overflow-auto bg-no-repeat bg-cover bg-center h-screen w-screen bg-[linear-gradient(60deg,rgba(255,265,150,0.5),rgba(0,228,255,0.5)),url('../public/images/bg.jpg')]`}>
      <div className={`flex flex-col justify-center items-center m-8`}>
        <div className='relative flex flex-col bg-white md:w-1/2 lg:w-1/4 rounded-3xl py-16'>
          <div className='flex flex-row items-center justify-center pb-8' >
            <hr className='flex w-1/2'></hr>
            <div className='flex px-6'>
              <img className='rounded-full' src={'/images/profile.jpg'} alt='profileimage' aria-label="Profile Image"></img>
            </div>
            <hr className='flex w-1/2'></hr>
          </div>
          <div className='flex flex-col items-center'>
            <div className='flex text-4xl md:text-5xl'>
              <p> Kirk Tolleshaug</p>
            </div>
            <div className='flex flex-col items-center text-xl md:text-2xl py-8'>
              <p>Senior Software Engineer</p>
              <p>Full Stack</p>
              <p>Angular/React - .Net - SQL</p>
            </div>
          </div>
          <hr className='py-2'></hr>
          <div className='flex flex-row justify-center h-12 md:h-20 space-x-2 text-gray-800'>
            <a className='flex h-full hover:text-[rgb(0,119,181)]' href='https://www.linkedin.com/in/ktolleshaug/' target='_blank' rel='noreferrer' aria-label='Linkedin'><FontAwesomeIcon className='flex h-full' icon={faLinkedin}></FontAwesomeIcon></a>
            <a className='flex h-full hover:text-green-600' href='https://github.com/ktoll2' target='_blank' rel='noreferrer' aria-label='Github'><FontAwesomeIcon className='flex h-full' icon={faGithub} ></FontAwesomeIcon></a>
            {/* <a className='flex h-full hover:text-yellow-500' href='https://observatory.mozilla.org/analyze/ktoll.dev' target='_blank' rel='noreferrer' aria-label='Mozilla Observatory'><FontAwesomeIcon className='flex h-full' icon={faShieldHalved}></FontAwesomeIcon></a> */}
          </div>
        </div>
        <div className='pt-2 text-white'>
          <p>&#169; Kirk Tolleshaug {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>

  );
}

export default App;
