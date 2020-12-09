// import React library and styling
import React from "react";
import "../Scss/Christmas.scss";
// import components 
import Hat from "../Components/Hat";
import Light from "../Components/Light";

const Christmas = () => {
  // For ease of coding, using an array of corresponding classname post-fix
  const class_names = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="container">
      <div className="hat-rack">
        {class_names.map((cn) => {
          return (
            <Hat
              key={cn}
              class_name={`hat hat-${cn}`}
              img={`hat.png`}
              alt={`christmas hat falling`}
            />
          );
        })}
      </div>
      <div className="intro-words">
        <h1>Merry Christmas, Ya Filthy Animal!</h1>
      </div>
      {/* NOTE: these are temp! and will be replaced by one or two pngs when site is done */}

      {class_names.map((cn) => {
        return (
          <Light
            key={cn}
            img={`lights.png`}
            class_name={`lights left lights-${cn}`}
          />
        );
      })}
      {class_names.map((cn) => {
        return (
          <Light
            key={cn}
            img={`lights.png`}
            class_name={`lights right lights-${cn}`}
          />
        );
      })}
    </div>
  );
};

export default Christmas;
