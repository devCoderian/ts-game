import * as React from 'react';
import { TryInfo } from './Types';
import { FunctionComponent } from 'react';

const Try:FunctionComponent<{tryInfo: TryInfo}> = ({tryInfo}) => {
    return(
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
};

//propTypes
export default Try;