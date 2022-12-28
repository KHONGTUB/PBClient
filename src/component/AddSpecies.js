import React, { useEffect, useState } from "react";

function AddSpecies(props) {
  const [name, setName] = useState("");

  function postSpecies() {
    fetch("https://pbtracker-khongtub.vercel.app/userRecord/newspecies", {
      method: "POST",
      body: JSON.stringify({
        userid: props.props.userid,
        species: name,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => console.log(res));
  }

  useEffect(() => {
    console.log(name);
  }, [name]);
  return (
    <div>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <button onClick={postSpecies}>post</button>
    </div>
  );
}

export default AddSpecies;
