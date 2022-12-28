import React from "react";

const App = () => {
  const vegetables= {"감자","고구마"};

  return(
    <div className="app-style">
      {vegetables.map((vegetableName)=>{
        return(
          <div className="square-style" key={vegetableName}>
            {vegetableName}
            </div>
          );
      })}
    </div>
  )
};

export default App;
