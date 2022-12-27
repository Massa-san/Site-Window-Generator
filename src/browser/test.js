import React from "react";
import { useState } from 'react';

let siteWindow = null;

const TestModule = () => {

    const [url, setUrl] = useState('https://www.google.com/');
    const [id, setId] = useState('');
    const [className, setClassName] = useState('');
  
    
    function getDocumentById() {
        siteWindow.getDocumentById(id)
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
          <header className="App-header">
            <input type="text" value={url} onChange={(event) => setUrl(event.target.value)} />
            <button onClick={openWindow}>Launch site Test</button>
            <br />
    
            <input type="text" value={id} onChange={(event) => setId(event.target.value)} />
            <button onClick={getDocumentById}>getElement(ID)</button>
            <br />
    
            <input type="text" value={className} onChange={(event) => setClassName(event.target.value)} />
            <button onClick={getElementByClassName}>getElement(ClassName)</button>
            <br />
          </header>
        </div>
      );
}; 

export default TestModule