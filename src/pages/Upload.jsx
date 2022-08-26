import React from "react";
import { fbase } from "../fbase";

function Upload() {
  const onChange = (e) => {
    const file = e.target.files[0];
    const storageRef = fbase.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("Upload successful");
    });
  };
  return (
    <div className='input-container'>
      <input type='file' onChange={onChange} />
    </div>
  );
}

export default Upload;
