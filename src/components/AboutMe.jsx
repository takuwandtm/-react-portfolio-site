import CoverImage from '../images/cover-image.jpeg'
import { SkillsItem } from './SkillsItem';
// import { useScrollFadeIn } from '../customHooks/useScrollFadeIn';

export const AboutMe = () => {
  const componentName = () => 'AboutMe';
  // const scrollPosition = useScrollFadeIn();

  return (
    <header className="main-cover-aboutMe" style={{ backgroundImage: `url(${CoverImage})` }}>
      <div id="about">
        {/* overlayはカバー画像の上に透過して表示される背景要素です */}

        <div className="overlay"></div>

        <div className="about-text"><p>About Me</p></div>
        <div class="explain-text">
          <p>駆け出しエンジニア藤島のポートフォリオサイトです。</p>
          <p>業務での経験、およびプライベートでの学習内容をまとめてみました</p>
          <p>数年後により充実し、"駆け出し"がとれるようにアウトプットを続けていく予定です。</p>
          <div class="container">
            <div className="about-text"><p>業務経験</p></div>
            <div className="explain-text">
              <div class="flex_box">
                {SkillsItem.map((item, index) => {
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
            </div>
          </div>
        </div>
      </div>
    </header >
  );
};
