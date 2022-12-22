import './App.css';
import { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [id, setId] = useState('');
  const [className, setClassName] = useState('');

  let siteWindow: Window | null = null

  function launch() {
    window.api.launch(url)
  }

  function getDocumentById() {
    window.api.getDocumentById(id)
  }

  function getDocumentByClassName() {
    window.api.getDocumentByClassName(className)
  }

  function clickClassName() {
    window.api.click(className)
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
        <button onClick={launch}>Launch site</button>
        <button onClick={openWindow}>Launch site Test</button>
        <br />

        <input type="text" value={id} onChange={(event) => setId(event.target.value)} />
        <button onClick={getDocumentById}>getElement(ID)</button>
        <br />

        <input type="text" value={className} onChange={(event) => setClassName(event.target.value)} />
        <button onClick={getDocumentByClassName}>getElement(ClassName)</button>
        <button onClick={getElementByClassName}>getElement(ClassName) Test</button>
        <button onClick={clickClassName}>click(ClassName)</button>
        <br />
      </header>
    </div>
  );
}

export default App;
