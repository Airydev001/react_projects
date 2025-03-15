import React from 'react';
import Header from './components/header';
import Entry from './components/Entry';
import Data from './data'
function App() {
  return (
    <div>
     <Header/>
     {
      Data.map((data)=>(
        <Entry key = {data.id} img={data.img}
        title={data.title}
        country = {data.country}
        googleMapsLink = {data.googleMapsLink}
        dates={data.dates}
        text = {data.text}
        />
      ))
     }
    
     
    </div>
  );
}

export default App;