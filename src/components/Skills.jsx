import Circle from 'react-circle';
import { requestStates } from '../constants';
import { useSkills } from '../customHooks/useSkills';
import { WorksItem } from './WorksItem';

export const Skills = () => {

  const [sortedLanguageList, fetchRequestState, converseCountToPercentage] = useSkills();

  return (
    <div id="Works">
      <div className="heading">
        <h1>Works</h1>
        <div className="flex_box_works">
          {WorksItem.map((item, index) => {
            return (
              <div className="flex_item_works">
                <h2 className={item.cName}>
                  {item.Title}
                </h2><a href={item.url}>
                  <img src={item.pic} className="works-picture" />
                </a>
              </div>
            );
          })}
        </div>

        <div id="skills">
          <h1>githubリポジトリ習熟度メーター</h1>
          <div className="container">
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
        </div >
      </div>
    </div>
  );
};
