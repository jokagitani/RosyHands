import React from 'react';
import Header from './components/menubar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Custom from './pages/Custom'
import Products from './pages/Products'
import Signin from './pages/Signin'
import Footer from './components/footer'
import './default.scss';

function App() {
  return (
  <Router>
    <Container>
      <main>
      <Header/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/products' component={Products} title="mathew"/>
      <Route exact path='/custom' component={Custom}/>
      <Route exact path='/signin' component={Signin}/>
      </main>
    </Container>
    <Footer/>
  </Router>
  );
} 

export default App;
