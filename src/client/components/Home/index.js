import React from 'react';
import {Form, reduxForm, Field} from 'redux-form';
import HomeStyle from './style';
import {submitSnippetHandler} from '../../redux/actions'

const Home = ({handleSubmit}) => <HomeStyle>
       <Form
           onSubmit={handleSubmit(submitSnippetHandler)}
           noValidate={true}
       >
            <Field component='input' type='text' name='snippet' name='snippet' className='snippet' placeholder='Please enter your text here...'/>
            <button type='submit' className='save' value='Save' name='save'>Save</button>
       </Form>
    </HomeStyle>;

const withForm = reduxForm({
    form: 'home',
});

export default withForm(Home);
