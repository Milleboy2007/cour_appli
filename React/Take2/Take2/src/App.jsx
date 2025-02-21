import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Maincontent from './maincontent.jsx'


function App() {

  return (
    <>
      <Header/>
      <Maincontent/>
      <Footer/>
    </>
  )
}

/*function App() {
  const hours = new Date().getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else if (hours < 21) {
    timeOfDay = "evening";
  } else {
    timeOfDay = "night";
  }

  return (
    <h1>GOOD {timeOfDay}</h1>
  );
}*/

export default App
