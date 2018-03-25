import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import Presentation from './containers/Presentation';

const App = (props) =>{
    return(
        <BrowserRouter>
            <Route exact path="/" component={Presentation}/>
        </BrowserRouter>
    )
};

export default App;
