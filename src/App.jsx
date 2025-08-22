import './App.css';
import Main from './Components/main/Main';
import Navber from './Components/navber/Navber';

function App() {

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }


  return (
    <>

      <Navber />
      <Main />

    </>
  )
}

export default App
