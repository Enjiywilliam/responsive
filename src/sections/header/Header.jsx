import headerImage from '../../assets/myskil.jpg'
import './header.css'
import data from './data'
import 'react-icons/io'

const Header = () => {
  return (
   <header id="header">
    <div className="container header__container">
      <div className="header__profile">
        <img src={headerImage} alt="header portait" className='header__img' />

      </div>
      <h3>Wewek Gombel</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur esse vitae debitis
         maxime laudantium molestiae cupiditate dolorum iusto totam odit odio, nihil nam id consequatur?
        
      </p>

      <div className="header__cta">
        <a href="#contact">Let's Talk</a>
        <a href="#portfolio">Learn More</a>
      </div>
      <div className="header__socials">
        {
          data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
        }
      </div>
    </div>
   </header>
  )
}

export default Header;