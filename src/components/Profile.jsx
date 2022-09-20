import CoverImage from '../images/cover-image.jpeg'
import ProfileImage from '../images/profile-image.jpg'
import { FaTwitter, FaGithub } from 'react-icons/fa'


export const Profile = () => {
  const componentName = () => 'Profile';
  return (

    <header className="main-cover" style={{ backgroundImage: `url(${CoverImage})` }}>
      {/* overlayはカバー画像の上に透過して表示される背景要素です */}
      <div id="profile">
        <div className="overlay"></div>
        <div className="container">
          <div className="display-table">
            <div className="display-table-contents">
              {/* カバー画像 */}
              <div className="profile-thumb" style={{ backgroundImage: `url(${ProfileImage})` }}></div>
              <h1 className="title-text">藤島優希</h1>
              <h2 className="title-text">Engineer </h2>
              <h3 className="title-text">神奈川出身のエンジニア。1997年生まれ。<br></br>大学の情報系学科でプログラミングを学び、卒業研究では学習支援システムをC#にて作成。
                <br></br>2021年4月にIT業界へ就職。主にJava,JavaScriptを使用し、販売管理システムの開発に従次。 </h3>
              <ul className="social-icons">
                <li className='icon-link'>
                  <a href="https://github.com/takuwandtm">
                    <FaGithub color="white" size="5rem" />
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
