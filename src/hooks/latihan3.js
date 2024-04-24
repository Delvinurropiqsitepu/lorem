import React, { useState } from "react";
import "./latihan3.css";

const Latihan3 = () => {
  const [count, setCount] = useState(0);

  const handleTambah = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="latihan3">
      <p>{count}</p>
      {count > 10 && <p>State count sudah lebih dari 10!</p>}
      <button onClick={handleTambah}>Tambah</button>
    </div>
  );
};

export default Latihan3;