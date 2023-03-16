import React from 'react';
import { NavigationDots } from '../components'

const AppWrap = (Component, idName) => function highOrderComponent() {
    return (
        <div id={idName} className={`app__container`}>
            <div className='app__wrapper app__flex'>
                <Component />
            </div>
            <NavigationDots active={idName}/>
        </div>
    )
};

export default AppWrap;