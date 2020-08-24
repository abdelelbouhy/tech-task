import React, {useEffect, useState} from 'react';
import {Form, reduxForm, Field} from 'redux-form';
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import HomeStyle from './style';
import {submitSnippetHandler} from '../../redux/actions';
import {snippetSelector, editSelector} from "./selectors";

const Home = ({handleSubmit, change}) => {
    const snippet = useSelector(snippetSelector);
    const isEditing = useSelector(editSelector);
    const [editStatus, updateEditStatue] = useState(true);


    useEffect(() => {
        if(snippet?.value && editStatus) {
            change('snippet', snippet.value);
            updateEditStatue(!isEditing);
        }
    });

    return (
        <>
        {(isEditing || !snippet.hash) && (
            <HomeStyle>
                <Form
                    onSubmit={handleSubmit(submitSnippetHandler)}
                    noValidate={true}
                >
                    <Field
                        component='input'
                        type='text'
                        name='snippet'
                        className='snippet'
                        placeholder='Please enter your text here...'
                    />
                    <button
                        type='submit'
                        className='save'
                        value='Save'
                        name='save'
                    >
                        Save
                    </button>
                </Form>
            </HomeStyle>)
        }

        {
            (snippet.hash && !isEditing) && (
                <Link to={`/snippet/${snippet.hash}`}>View Snippet</Link>
            )
        }
        </>)
};

const withForm = reduxForm({
    form: 'home',
});

export default withForm(Home);
