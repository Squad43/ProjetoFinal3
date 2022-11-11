import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListCadastroComponent from './components/ListCadastroComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCadastroComponent from './components/CreateCadastroComponent';
import ViewCadastroComponent from './components/ViewCadastroComponent';
import Home from './Pages/Home';

function App() {
return (
<div>
<Router>
<HeaderComponent />
<div className="container">
<Switch>
<Route path = "/" exact component = {Home}></Route>
<Route path = "/cadastros" component = {ListCadastroComponent}></Route>
<Route path = "/add-cadastro/:cod_pessoa" component = {CreateCadastroComponent}></Route>
<Route path = "/view-cadastro/:cod_pessoa" component = {ViewCadastroComponent}></Route>
</Switch>
</div>
<FooterComponent />
</Router>
</div>
);
}
export default App;