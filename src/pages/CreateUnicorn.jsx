import React from 'react'
import Header from '../components/Header';
import Form from '../components/Form'

function CreateUnicorn({url, validation}) {
  return (
    <div>
        <Header/>
        <h2 style={{color:"black", textAlign:"center", marginTop:"30px"}}>Unicorn Form</h2>
        <Form url={url} validation={validation}/>
    </div>
  )
}

export default CreateUnicorn