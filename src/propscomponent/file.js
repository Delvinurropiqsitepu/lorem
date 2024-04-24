import React from 'react';
import './file.css';

const Welcome = (props) => {
  const { name, email, alamat } = props;
  
  return (
    <div className="Welcome-header">
      <h3>Data diri peserta kelas (Praktikum)</h3>
      <ul>
        <li>
          <span className="label">Nama Lengkap:</span> {name}
        </li>
        <li>
          <span className="label">Email:</span> {email}
        </li>
        <li>
          <span className="label">Alamat:</span> {alamat}
        </li>
      </ul>
    </div>
  );
}

export default Welcome;