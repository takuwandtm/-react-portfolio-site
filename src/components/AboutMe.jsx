import CoverImage from '../images/cover-image.jpeg'
export const AboutMe = () => {
  const componentName = () => 'AboutMe';
  return (
    <header className="main-cover" style={{ backgroundImage: `url(${CoverImage})` }}>
      <div id="about">
        {/* overlayはカバー画像の上に透過して表示される背景要素です */}
        <div className="overlayAbout"></div>

        <div className="about-text"><p>About Me</p></div>
        <div className="explain-text">
          <p>駆け出しエンジニア藤島のポートフォリオサイトです。</p>
          <p>業務での経験、およびプライベートでの学習内容をまとめてみました</p>
          <p>数年後により充実し、"駆け出し"がとれるようにアウトプットを続けていく予定です。</p>
        </div>
      </div>
    </header >
  );
};
