import React, { useState, useEffect } from "react";

const KanBan = () => {
  const [value, setValue] = useState(localStorage.getItem('myValueInLocalStorage') || "")
 
  const onChange = event => setValue(event.target.value);

  useEffect(() => {
    localStorage.setItem('myValueInLocalStorage', value);
  }, [value]);


  return (
    <div>
      <p>Hello from the KanBan</p> 

      <input defaultValue={value} type="text" onChange={onChange} />
  
      <p>{value}</p>
    </div>
  )
};

export default KanBan;