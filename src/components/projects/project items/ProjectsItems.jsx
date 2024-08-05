import { useContext } from 'react';
import { FaExternalLinkAlt, FaLink } from 'react-icons/fa';
import bookingRoom from '../../../assets/booking-room.png';
import dogApp from '../../../assets/dog-app.png';
import trabalhosArtesanais from '../../../assets/trabalhos-artesanais.png';
import vanLife from '../../../assets/van-life.png';
import { LanguageContext } from '../../../contexts/LanguageContext';
import './ProjectsItems.css';

function ProjectsItems() {
  const { languageData } = useContext(LanguageContext);

  const textRepository = languageData.projectItemTextRepository;
  const textLive = languageData.projectItemTextLive;

  const projects = [
    {
      title: languageData.projectItemTitle1,
      tags: ['javascript', 'react', 'router-dom-v6', 'firebase'],
      imgSrc: vanLife,
      linkRepository: 'https://github.com/jessicasantosb/van-life',
      linkLive: 'https://vanlife-jessicasantosb.netlify.app/',
    },
    {
      title: languageData.projectItemTitle2,
      tags: ['typescript', 'react', 'tailwind', 'firebase'],
      imgSrc: trabalhosArtesanais,
      linkRepository: 'https://github.com/jessicasantosb/trabalhos-artesanais',
      linkLive: 'https://trabalhos-artesanais.vercel.app/',
    },
    {
      title: languageData.projectItemTitle3,
      tags: ['javascript', 'react', 'sass', 'stripe'],
      imgSrc: bookingRoom,
      linkRepository: 'https://github.com/jessicasantosb/booking-room',
      linkLive: 'https://booking-room-jessicasantosb.vercel.app/',
    },
    {
      title: languageData.projectItemTitle4,
      tags: ['javascript', 'react'],
      imgSrc: dogApp,
      linkRepository: 'https://github.com/jessicasantosb/dog-app',
      linkLive: 'https://dog-app-jessicasantosb.vercel.app/',
    },
  ];

  return (
    <div>
      {projects.map((project, i) => (
        <div className='project-card center' key={i}>
          <h2 className='project-item-title'>{project.title}</h2>
          <ul className='tags disable-selection'>
            {project.tags.map((tag, i) => (
              <li className={`tag ${tag.toLowerCase()}`} key={i}>
                {tag}
              </li>
            ))}
          </ul>
          <div className='card-content center'>
            <img
              className='project-img'
              src={project.imgSrc}
              alt='calculator'
            />
            <div className='project-links'>
              <a
                className='project-link'
                href={project.linkRepository}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLink className='project-link-icon' />
                {textRepository}
              </a>
              <a
                className='project-link'
                href={project.linkLive}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaExternalLinkAlt className='project-link-icon' />
                {textLive}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsItems;
