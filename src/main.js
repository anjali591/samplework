
import React from 'react';
import Landing from './landingpage';
import {Switch, Route} from 'react-router-dom';

import Projects from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
       
        <Route  path="/projects" component={Projects} />
        <Route path="/landing" component={Landing} />
        
        
    </Switch>
)

export default Main;
