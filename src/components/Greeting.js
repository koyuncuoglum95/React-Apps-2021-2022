import React from 'react'
import { useState } from 'react';

import Output from './Output';
import Async from './Async';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false)

  const changedTextHandler = () => {
    setChangedText(true);
  }


  return (
    <div>
        <h1>Hello World</h1>
        {!changedText && <Output>It's good to see you</Output>}
        {changedText && <Output>Changed!</Output>}
        <button onClick={changedTextHandler}>Change Text !</button>

        <Async />
    </div>
  )
}

export default Greeting;