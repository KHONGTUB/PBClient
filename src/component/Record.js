import React, { useEffect, useState } from "react";
import AddSpecies from "./AddSpecies";
import moment from "moment";

moment().format();

function Record(props) {
  const [state, setState] = useState([]);
  const [display, setDisplay] = useState([]);

  const getUserRecord = () => {
    fetch(`https://pbtracker-khongtub.vercel.app/userRecord/${props.userid}`)
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  };

  useEffect(() => {
    console.log(props.userid);
    getUserRecord();
  }, []);

  return (
    <>
      {state.length === 0 ? (
        <div>empty</div>
      ) : (
        <div>
          <h1>These are the species you have on record</h1>
          <AddSpecies props={props} />
          {display.length === 0 && (
            <ul style={{ listStyle: "none" }}>
              {state.map((element) => {
                return (
                  <li
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setDisplay(element.catches);
                    }}
                  >
                    {element.speciesName}
                  </li>
                );
              })}
            </ul>
          )}
          {display.length > 0 && (
            <>
              <button
                onClick={() => {
                  setDisplay([]);
                  console.log(display);
                }}
              >
                return
              </button>
              <ul style={{ listStyle: "none" }}>
                {display.map((element) => {
                  return (
                    <li style={{ border: 5 }}>
                      <div>Length:{element.length} inches </div>
                      <div>Weigth:{element.weight} pounds </div>
                      <div>Date Caught:{element.postdate}</div>
                      <img
                        style={{ width: 100, height: "auto" }}
                        src={element.picture}
                      ></img>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Record;
