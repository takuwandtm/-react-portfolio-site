import CoverImage from '../images/cover-image.jpeg'
import ProfileImage from '../images/profile-image.jpg'
import { FaTwitter, FaGithub } from 'react-icons/fa'


export const Header = () => {
  const componentName = () => 'Header';
  return (
    <header className="main-cover" style={{ backgroundImage: `url(${CoverImage})` }}>
      {/* overlayはカバー画像の上に透過して表示される背景要素です */}
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            {/* カバー画像 */}
            <div className="profile-thumb" style={{ backgroundImage: `url(${ProfileImage})` }}>
              <h1 className="title-text">藤島優希</h1>
              <h3 className="title-text">Engineer</h3>
              <ul className="social-icons">
                <li className='icon-link'>
                  <a href="https://github.com/takuwandtm">
                    <FaGithub color="white" size="2rem" />
                  </a>
                </li>
                <li className='icon-link'>
                  {/* TODO*/}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
