import CoverImage from '../images/cover-image.jpeg'
import JavaScriptImage from '../images/javascript.png'
import JQuery from '../images/jquery.png'
import Java from '../images/java.png'
import SpringBoot from '../images/spring_boot.png'
import Oracle from '../images/Oracle.png'

export const AboutMe = () => {
  const componentName = () => 'AboutMe';
  return (
    <header className="main-cover-aboutMe" style={{ backgroundImage: `url(${CoverImage})` }}>
      <div id="about">
        {/* overlayはカバー画像の上に透過して表示される背景要素です */}
        <div className="overlay"></div>

        <div className="about-text"><p>About Me</p></div>
        <div className="explain-text">
          <p>駆け出しエンジニア藤島のポートフォリオサイトです。</p>
          <p>業務での経験、およびプライベートでの学習内容をまとめてみました</p>
          <p>数年後により充実し、"駆け出し"がとれるようにアウトプットを続けていく予定です。</p>

          <div className="about-text"><p>業務経験</p></div>
          <div className="explain-text">
            <div class="flex_box">
              <div class="flex_item">
                <h1>フロントエンド</h1>
                <h2><img src={JavaScriptImage} className="skill-picture" />JavaScript</h2>
                <h1>フレームワーク</h1>
                <h2><img src={JQuery} className="skill-picture" />jQuery</h2>
              </div>
              <div class="flex_item">
                <h1>バックエンド</h1>
                <h2><img src={Java} className="skill-picture" />Java</h2>
                <h1>フレームワーク</h1>
                <h2><img src={SpringBoot} className="skill-picture" />SpringBoot</h2>
              </div>
              <div class="flex_item">
                <h1>RDBMS</h1>
                <h2><img src={Oracle} className="skill-picture" />Oracle</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header >
  );
};
