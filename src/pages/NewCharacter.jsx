import React from 'react';

// Import Components
import SheetBuilder from '../components/SheetBuilder';

export default function NewCharacter(props) {

  // Props
  const { sheetValues, changeHandler, submitHandler } = props;

  return (
    <>
      <header className='text-center'>
        <div className='p-8'>
          <h1 className='text-4xl font-bold'>Build a New Character</h1>
        </div>
      </header>
      <section className='p-8'>
        <div className='mx-auto'>
          <SheetBuilder
            changeHandler={changeHandler}
            submitHandler={submitHandler}
            sheetValues={sheetValues}
          />
        </div>
      </section>
    </>
  )
}