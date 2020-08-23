/* istanbul ignore file */
import {buildQueries, queryHelpers} from '@testing-library/react';

const queryAllByName = (...args) =>
    queryHelpers.queryAllByAttribute('name', ...args);

const getMultipleError = (container, nameValue) =>
    `Found multiple elements with the name attribute of: ${nameValue}`;
const getMissingError = (container, nameValue) =>
    `Unable to find an element with the name attribute of: ${nameValue}`;

const [
    queryByName,
    getAllByName,
    getByName,
    findAllByName,
    findByName,
] = buildQueries(queryAllByName, getMultipleError, getMissingError);

export default {
    queryByName,
    queryAllByName,
    getByName,
    getAllByName,
    findAllByName,
    findByName,
};
