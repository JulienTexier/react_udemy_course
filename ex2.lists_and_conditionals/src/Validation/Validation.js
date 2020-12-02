import React from 'react';

const validation = (props) => {
  let validationMessage = 'Text long enough';

  if (props.inputLength <= 5) {
    validationMessage = 'Text too short';
  }
  else if (props.inputLength >= 15) {
    validationMessage = 'Text too looooooong';
  }

  return (
    <div>
      <p>{validationMessage}</p>
      <p>{props.inputLength}</p>
    </div>

  )
}

export default validation;