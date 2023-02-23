import React, {useState} from "react";


export default function About() {
    const [myStyle,setmyStyle] = useState({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
    })
    
    const [btntext,setbtntext] = useState("Enable Light Mode")
    
    const toggleMode = () =>{
        if(myStyle.color==='white'){
            setmyStyle({
                color: 'black',
                backgroundColor: 'white',
                border: '1px solid black'
            })
            setbtntext("Enable Dark Mode");
        }
        else{
            setmyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setbtntext("Enable Light Mode");
        }
    }
  return (
    <div className="container" style={myStyle}>
    <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne" style={myStyle}
            >
              Text-to-Speech
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            Amazon Polly is a service that turns text into lifelike speech, allowing you to create applications that talk, and build entirely new categories of speech-enabled products.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Speech-to-Text
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            Amazon Transcribe uses a deep learning process called automatic speech recognition (ASR) to convert speech to text quickly and accurately
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree" style={myStyle}
            >
              Build and Deploy Machine Learning Models
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning (ML) models quickly.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
     <button  type="button" onClick={toggleMode} className="btn btn-primary my-3">{btntext
      }</button> 
      </div>
    </div>
  );
}
