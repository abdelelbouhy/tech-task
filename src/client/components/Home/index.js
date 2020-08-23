import React from 'react';
import HomeStyle from './style';

export default () =>
    <HomeStyle>
        <input type='text' name='snippet' className='snippet' placeholder='Please enter your text here...'/>
        <input type='submit' className='save' value='Save' />
    </HomeStyle>
