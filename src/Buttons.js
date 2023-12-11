import React from "react";

export const Buttons = ({ isStarted, isStopped, reset, startOrResume, stop }) => {

    if(isStarted) {
        return (
            <div className="buttons">
                <button onClick={ stop }> Stop </button>
            </div>
        )
    } else if(isStopped){
      return (
          <div className="buttons">
              <button onClick={ reset }> Reset </button>
              <button onClick={ startOrResume }> Resume </button>
          </div>
      )
    } else {
        return (
            <div className="buttons">
                <button onClick={ startOrResume }> Start </button>
            </div>
        )
    }

}