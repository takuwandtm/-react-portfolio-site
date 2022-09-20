import { WorksItem } from './WorksItem';

export const Works = () => {

  return (
    <div id="Works">
      <div className="heading">
        <h1>Works(改修中)</h1>
        <div className="works-container">

          {WorksItem.map((item, index) => {
            return (
              <div className="works-item">
                <a className={item.cName}>
                  {item.Title}
                </a><br></br><a href={item.url}>
                  <img src={item.pic} className="works-picture" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

