import { Suspense } from 'react'
import './App.css'
import Countries from './contries/Countries'

const contriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())
function App() {


  return (
    <>

      <h1>React on the goo.....</h1>
     <Suspense fallback={<p>Nadir on the go</p>}>
       <Countries contriesPromise={contriesPromise}></Countries>
     </Suspense>

    </>
  )
}

export default App
