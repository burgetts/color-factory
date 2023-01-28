import React, { useState } from 'react';
import ColorsList from './ColorsList';
import { Routes, Route, Navigate } from 'react-router-dom';
import NewColorForm from './NewColorForm';
import Color from './Color';

const App = () => {
  const [colors, setColors] = useState([{name: 'red', colorValue: ' #FF0000'}])
  const addColor = (newColor) => {
      setColors([...colors, newColor])
  }
  return (
    <Routes>
      <Route path='/colors' >
        <Route index element={<ColorsList colors={colors} />} />
        <Route path='/colors/new' element={<NewColorForm addColor={addColor} colors={colors}/>} />
        {/* how to pass just one?? */}
        <Route path='/colors/:color' element={<Color colors={colors}/>} /> 
      </Route>
      <Route path='/*' element={<Navigate to='/colors' />} />
    </Routes>
  );
}

export default App;
