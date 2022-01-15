import React from 'react';
import ReactDom from 'react-dom';
import { Home } from './Home';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'


const html = document.getElementById("html")

ReactDom.render(<Home />,html)

serviceWorkerRegistration.register()