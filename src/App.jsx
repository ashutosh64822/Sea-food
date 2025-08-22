import { Suspense } from 'react';
import './App.css';
import Main from './Components/main/Main';
import Navber from './Components/navber/Navber';

function App() {

  const fetchData = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(res => res.json())

  return (
    <>

      <Navber />
      <Suspense fallback={<div>Loading...</div>}>
        <Main fetchData={fetchData} />
      </Suspense>

    </>
  )
}






export default App
