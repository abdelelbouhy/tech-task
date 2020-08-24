import React, {useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {snippetSelector} from "../Home/selectors";
import {editSnippet} from '../../redux/actions';
import {Link, Router} from 'react-router-dom';

const Snippet = () => {
    const snippet = useSelector(snippetSelector);
    const dispatch = useDispatch();
    const handleEditClick = useCallback(() => dispatch(editSnippet(snippet)))

    return (
        <>
            <div>{snippet.value}</div>
            <Link to={`/${snippet.hash}/edit`} onClick={handleEditClick}>Edit</Link>
        </>
    )
};

export default Snippet
