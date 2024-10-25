import './App.css';
import Counter from './Counter';
import PrevCounter from './PrevCounter';
import BgChanger from './BgChanger';
import UseEffectLearn from './UseEffectLearn';
import CurrencyConverter from './CurrencyConverter';
import CurrencyAPI from './CurrencyAPI';
import React, {useState} from 'react';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import ContextAPI from './ContextAPI';
import UseMemoHook from './UseMemoHook'
import Form from './Form';
import RegistrationForm from './RegistrationForm'
import MapMethod from './MapMethod'
import UseStateWithObject from './UseStateWithObject'
import UseStateWithArray from './UseStateWithArray'
import {useMemo} from 'react'
import AxiosLearn from './AxiosLearn'
import AxiosPost from './AxiosPost'
import MusicAPI from './MusicAPI';

function App() {
  const [curAPI, setCurAPI] = useState(CurrencyAPI);
  var i1=0;

  useMemo(
    ()=>{
      for(i1=0; i1<10; i1++)
      {
        console.log("i1 = " + i1)
      }
    }, [])
  // document.write() method is problematic in react.

  const persons = [
    {name: "Rohit", age: "21"},
    {name: "Ravi", age: "22"},
    {name: "Karan", age: "16"},
    {name: "Arun", age: "19"},
    {name: "Kuldeep", age: "23"}
  ];

  return (
    <>
    <BrowserRouter>
      <nav>
        <Link to="/" className=''>Home</Link>
        <Link to="/contact" className='ml-[20px]'>Contact</Link>
        <Link to="/about" className='ml-[20px]'>About</Link>
        <Link to="/signup" className='ml-[20px]'>Signup</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>
          <div>I am home page</div>
            {persons.map((p) => (
              <Counter key={p.name} name={p.name} age={p.age}/>
            ))}
            <PrevCounter />
            <BgChanger />
            <UseEffectLearn />
            <CurrencyConverter curAPI={curAPI} />
          </div>} />
        <Route path="/contact" element={<div>I am contact page</div>} />
        <Route path="/about" element={<div>I am about page</div>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <ContextAPI></ContextAPI>
    </BrowserRouter>

    <UseMemoHook></UseMemoHook>
    <Form></Form>
    <RegistrationForm></RegistrationForm>
    <MapMethod></MapMethod>
    <UseStateWithObject></UseStateWithObject>
    <UseStateWithArray></UseStateWithArray>
    <AxiosLearn></AxiosLearn>
    <AxiosPost></AxiosPost>
    <MusicAPI></MusicAPI>
    </>
  );
}

export default App