import React, { useState } from 'react'

export default function About() {

  const [myStyle, setMyStyle] = useState({color: 'black', backgroundColor: 'white'});
  const toggleStyle = () =>
    {
        if(myStyle.color === 'black'){
            setMyStyle({color: 'white', backgroundColor: 'black'});
        }

        else{
            setMyStyle({color: 'black', backgroundColor: 'white'});
        }
    }
    
    return (
        <div className="container" style = {myStyle}> 
          <h3>About Texto</h3>
                <div>
                    <h6>Texto is a single page web application developed in June 2024, it can be used to analyse your text.</h6>
                    <h6>It is built with JavaScript on ReactJs Framework.</h6>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Click for more
                        </button>
                        </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={myStyle}>
                                    <strong>Developed by:</strong> Yash Dev Singh.
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
        </div>
   )
}
