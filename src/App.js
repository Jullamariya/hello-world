import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import ClassClick from "./components/ClassClick";
import FuntionClick from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheets from "./components/Stylesheets";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyle.module.css";

import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import Column from "./components/Column";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ClickCounter from "./components/ClickCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import CounterTwo from "./components/CounterTwo";
import ComponentC from "./components/ComponentC";
import {UserProvider} from './components/UserContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1 className = 'error'>Error</h1>
        <h1 className = {styles.success}> Success</h1> */}

        {/* <Greet name="Bruce" heroName="Batman">
          <p> This is children props </p>
        </Greet>

        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>  */}

        {/* <Greet name="Diana" heroName="Wonder Women" /> */}

        {/* <Welcome name="Peter" heroName="Spiderman" /> */}
        {/* <Welcome name="Tony" heroName="Iornman" />
        <Welcome name="Stephen" heroName="Dr.Strange" />  */}

        {/* <Message/> */}

        {/*<Hello /> */}

        {/* <Counter/>  */}

        {/* <ClassClick/> */}

        {/* <FuntionClick/> */}

        {/* <EventBind/> */}

        {/* <ParentComponent/> */}

        {/* <UserGreeting/> */}

        {/* <NameList/> */}

        {/* <Stylesheets primary = {true}/> */}

        {/* <Inline/> */}

        {/* <Form/> */}

        {/* <LifecycleA/> */}

        {/* <FragmentDemo/> 

            <Table/>

            <Column/> */}

        {/* <ParentComp/> */}

        {/* <RefsDemo /> */}

        {/* <FocusInput/> */}

        {/* <FRParentInput /> */}

        {/* <PortalDemo/> */}

        {/* <ErrorBoundary>
             <Hero heroName="Batman"/>
            </ErrorBoundary>

            <ErrorBoundary>
              <Hero heroName = "Superman"/>
            </ErrorBoundary>
             
            <ErrorBoundary>
             <Hero heroName="Joker"/>
            </ErrorBoundary> */}

        {/* <ClickCounter/> */}
        {/* <ClickCounter name= 'Julla'/>
              <HoverCounter/> */}

        {/* <ClickCounterTwo/> 
              <HoverCounterTwo/> 
              <User name ={ (IsLoggedIn) => IsLoggedIn? 'Julla' : 'Guest '}  /> */}
         {/* <CounterTwo
          render={(count, incrementCount) => (
            <ClickCounterTwo
              count={count}
              incrementCount={incrementCount}
            ></ClickCounterTwo>
          )} 
        />
        <CounterTwo render={(count,incrementCount)=>(
          <HoverCounterTwo
          count={count} 
          incrementCount={incrementCount}
          ></HoverCounterTwo>
        // )}/> */}
          {/* <UserProvider value= "Julla"> */}
            <ComponentC/> 
          {/* </UserProvider> */}

                {/* <PostList/> */}

      </div>
    )
  }
}

export default App
