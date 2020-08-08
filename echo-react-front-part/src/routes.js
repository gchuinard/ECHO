import React from 'react';

// Routes

import { Route, Redirect, Switch } from 'react-router-dom'

import ConnexionForm from 'src/components/ConnexionForm';
import RegisterForm from 'src/components/RegisterForm';
import Home from 'src/components/Home';
import LegalMentions from 'src/components/LegalMentions';
import ContactForm from 'src/components/ContactForm';
import Echo from 'src/components/Echo';
import Profile from 'src/components/Profile';
import { useSelector } from 'react-redux';
import TagPage from 'src/components/TagPage';
import CreateEchoForm from './components/CreateEchoForm';

const Routes = () => {

  const isConnected = useSelector((state) => state.connexion.isConnected);

  return <div>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/tags" component={Tags} /> */}
      <Route exact path="/login" component={ConnexionForm} />
      <Route exact path="/signup" component={RegisterForm} />
      <Route exact path="/legal-mentions" component={LegalMentions} />
      <Route exact path="/contact" component={ContactForm} />
      <Route exact path="/echo/:id/" component={Echo} />
      <Route exact path="/tag/:id/" component={TagPage} />
      <Route exact path="/profile" component={Profile} />
      {/* {isConnected && (<Route exact path="/profile" component={Profile}/>)}  */}
      {isConnected && (<Route exact path="/create-echo" component={CreateEchoForm} />)}
      <Route><Redirect to="/" /></Route>
    </Switch>
  </div>;
};

export default Routes;
