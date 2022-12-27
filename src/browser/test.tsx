import React from "react";
import { useState } from 'react';
import "./test.css";

let siteWindow : Window | null = null;

const TestModule = () => {

    const [url, setUrl] = useState('https://www.google.com/');
    const [id, setId] = useState('');
    const [className, setClassName] = useState('');
  
    
    function getElementById() {
        siteWindow?.document.getElementById(id)
    }
  
    function openWindow() {
        siteWindow = window.open(url, '', 'width=800,height=600')
    }
  
    function getElementByClassName() {
        const element = siteWindow?.document.getElementsByClassName(className)
        if (element === undefined) {
            console.log("Elementの取得に失敗しました")
        } else {
            console.log(element[0])
        }
    }

    return (
        <div className="App">
            <div className="input_zone">
                <div className="text_input">
                    <input type="text" value={url} onChange={(event) => setUrl(event.target.value)} />
                    <button onClick={openWindow}>Launch site Test</button>
                </div>
                <div className="text_input">
                    <input type="text" value={id} onChange={(event) => setId(event.target.value)} />
                    <button onClick={getElementById}>getElement(ID)</button>
                </div>
                <div className="text_input">
                    <input type="text" value={className} onChange={(event) => setClassName(event.target.value)} />
                    <button onClick={getElementByClassName}>getElement(ClassName)</button>
                </div>
            </div>
        </div>
      );
}; 

export default TestModule