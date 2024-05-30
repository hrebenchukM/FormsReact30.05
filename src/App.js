
import React from 'react';

import './App.css';
import { UserForm } from './Components/TaksValid1';
import { NameForm } from './Components/Task1';
import { EssayForm } from './Components/Task2';
import { FlavorForm } from './Components/Task3';
import { FileInput } from './Components/Task4Ref';
import { CustomTextInput } from './Components/Task5Ref2';
import { Calculator } from './Components/Task7State-up';

import { MyForm } from './Components/HW';



function App() {
  return (
    <div>
    {/* <NameForm/> */}
    {/* <EssayForm/> */}
    {/* <FlavorForm/> */}

    {/* <UserForm name="" age="0" /> */}
    {/* <UserForm/> */}

    {/* <FileInput/> */}
    {/* <CustomTextInput/> */}
    {/* <CustomTextInput/> */}

     {/* Подъем состояния */}
     {/* https://ru.legacy.reactjs.org/docs/lifting-state-up.html */}
      {/* <Calculator/> */}
    


      <MyForm id="" password="" name="" adress="" age="" country="" zip="" email="" gender=""/>
    </div>
  );
}

export default App;
