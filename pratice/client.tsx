//리액트는 디폴트가 없기 때문에 import React from 'react' 불가능
import * as React from 'react';
import * as ReactDOM from'react-dom';
import { hot } from 'react-hot-loader/root'
//하이오더 컴포넌트 컴포넌트를 다름 컴포넌트로 감싸는 거
import GuGuDan from './GuGuDan';
import WordRelay from './WordRelay';

const Hot = hot(WordRelay);
ReactDOM.render( 
    // <GuGuDan />
    <Hot />
    , document.querySelector('#root'));