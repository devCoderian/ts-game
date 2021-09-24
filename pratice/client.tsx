//리액트는 디폴트가 없기 때문에 import React from 'react' 불가능
import * as React from 'react';
import * as ReactDOM from'react-dom';

import GuGuDan from './GuGuDan';

ReactDOM.render( <GuGuDan />, document.querySelector('#root'));