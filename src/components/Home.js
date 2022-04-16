import Notes from './Notes';
import React from 'react';

export const Home = (props) => {

  return (
    <>
      <Notes showAlert={props.showAlert} />
    </>
  )
}