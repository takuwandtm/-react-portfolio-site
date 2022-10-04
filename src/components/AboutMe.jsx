import CoverImage from '../images/cover-image.jpeg'
import { SkillsItem } from './SkillsItem';
import { Up, Left, Down } from './organisms/Animation';

export const AboutMe = () => {
  const componentName = () => 'AboutMe';

  return (
    <header className="main-cover-aboutMe" style={{ backgroundImage: `url(${CoverImage})` }} id='about'>
      <div className="overlay"></div>
      {/* overlayはカバー画像の上に透過して表示される背景要素です */}


      <Down>
        <div className="about-text"><p>About Me</p></div>
      </Down>

      <div class="explain-text"><Left>
        <p>駆け出しエンジニア藤島のポートフォリオサイトです。</p>
        <p>業務での経験、およびプライベートでの<br class="br-sp"></br>学習内容をまとめてみました</p>
        <p>数年後により充実し、"駆け出し"がとれるように<br class="br-sp"></br>アウトプットを続けていく予定です。</p>
      </Left>
        <div class="container">
          <Up>
            <div className="about-text"><p>業務経験</p></div>
          </Up>
          <div className="explain-text">
            <Left>
              <div class="flex_box">
                {SkillsItem.map((item) => {
                  return (

                    <div className="flex_item">
                      <h1>{item.genre}</h1>
                      <img src={item.langPic} className="skill-picture"></img><p>{item.language}</p>
                      <h1>{item.sub}</h1>
                      <img src={item.framePic} className="skill-picture" /><p>{item.frame}</p>
                    </div>

                  );
                })}

              </div>
            </Left>
          </div>
        </div>
      </div>
    </header >
  );
};
