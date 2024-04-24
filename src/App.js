import React from 'react';
import Introduction from './introduction/introduction';
import Welcome from './propscomponent/file';
import Latihan3 from './hooks/latihan3';

const App = () => {
  return (
    <>
      <Introduction />
      
      <Welcome name="Rofik" alamat="Your Address" email="Your Email" />
      <Latihan3 />
    </>
  );
}
export default App;