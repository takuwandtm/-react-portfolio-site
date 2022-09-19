import Circle from 'react-circle';
import { requestStates } from '../constants';
import { useSkills } from '../customHooks/useSkills';
import ProfileImage from '../images/meditation-app-master.png';
export const Skills = () => {

  const [sortedLanguageList, fetchRequestState, converseCountToPercentage] = useSkills();

  return (
    <div id="skills">
      <div className="container">
        <div className="heading">

          <h2>Works</h2>
          {/* <div className="skill-container">
            <img src={`${ProfileImage}`} className="item-img" />
          </div> */}


        </div>
        <div className="skills-container">
          {
            fetchRequestState === requestStates.loading && (
              <p className="description">取得中...</p>
            )
          }
          {
            fetchRequestState === requestStates.success && (
              sortedLanguageList().map((item, index) => (
                <div className="skill-item" key={index}>
                  <p className="description"><strong>{item.language}</strong></p>
                  <Circle
                    animate
                    progress={converseCountToPercentage(item.count)}
                  />
                </div>
              ))
            )
          }
          {
            fetchRequestState === requestStates.error && (
              <p className="description">エラーが発生しました</p>
            )
          }
        </div>
      </div>
    </div>
  );
};
