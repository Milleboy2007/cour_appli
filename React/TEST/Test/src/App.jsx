/*import './App.css'
import voitures from './assets/voiture'
import Voiture from './components/Voiture'




function App() {

    const voitureElements = voitures.map(voiture => {
    return <Voiture prop={voiture}/>})

    return (
      <>
        <div className="app">
          <h1>Liste de voitures</h1>
          <div className="voiture-list">
            {voitureElements}
          </div>
        </div>
        
      </>
    )
}

export default App*/

import "./App.css";
import voitures from "./assets/voiture";
import Voiture from "./components/Voiture";
 
function App() {
  const voituresElements = voitures.map((voiture) => {
    return <Voiture prop={voiture} />;
  });

  return <>
          <div className="app">
          <h1>Liste de voitures</h1>
          <div className="voiture-list">
            {voituresElements}
          </div>
          </div>
  </>;
}
export default App;