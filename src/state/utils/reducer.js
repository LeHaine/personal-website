import * as Action from "./action-types";

const fetchDataDefaultState = {
    data: null,
    loading: false,
    error: null
};

export const createFetchDataReducer = (name = "") => {
    return (state = fetchDataDefaultState, action = {}) => {
        switch (action.type) {
            case Action.FETCH_DATA_REQUEST + "_" + name:
                return {
                    ...fetchDataDefaultState,
                    loading: true
                };
            case Action.FETCH_DATA_SUCCESS + "_" + name:
                return {
                    ...fetchDataDefaultState,
                    loading: false,
                    data: action.response.data
                };
            case Action.FETCH_DATA_FAILURE + "_" + name:
                return {
                    ...fetchDataDefaultState,
                    loading: false,
                    data: null,
                    error: action.error
                };
            case Action.FETCH_DATA_RESET + "_" + name:
                return {
                    fetchDataDefaultState
                };
            default:
                return state;
        }
    };
};

const fetchDataPaginatedDefaultState = {
    data: [],
    loading: false,
    error: null,
    pagesFetched: [],
    page: 0,
    lastPage: 0
};
export const createFetchPaginatedDataReducer = (name = "") => {
    return (state = fetchDataPaginatedDefaultState, action = {}) => {
        switch (action.type) {
            case Action.FETCH_DATA_REQUEST + "_" + name:
                return {
                    ...state,
                    loading: true
                };
            case Action.FETCH_DATA_SUCCESS + "_" + name:
                return {
                    ...state,
                    loading: false,
                    data: [...state.data, ...action.response.data.content],
                    pagesFetched: [
                        ...state.pagesFetched,
                        action.response.data.number
                    ],
                    page: action.response.data.number,
                    lastPage: action.response.data.totalPages
                };
            case Action.FETCH_DATA_FAILURE + "_" + name:
                return {
                    ...state,
                    loading: false,
                    data: []
                };
            case Action.FETCH_DATA_RESET + "_" + name:
                return {
                    fetchDataPaginatedDefaultState
                };
            default:
                return state;
        }
    };
};

const doPostDefaultState = {
    data: null,
    success: false,
    failure: false,
    loading: false,
    error: null
};

export const createDoPostReducer = (name = "") => {
    return (state = doPostDefaultState, action = {}) => {
        switch (action.type) {
            case Action.DO_POST_REQUEST + "_" + name:
                return {
                    ...doPostDefaultState,
                    loading: true
                };
            case Action.DO_POST_SUCCESS + "_" + name:
                return {
                    ...doPostDefaultState,
                    success: true,
                    data: action.response.data
                };
            case Action.DO_POST_FAILURE + "_" + name:
                return {
                    ...doPostDefaultState,
                    failure: true,
                    error: action.error
                };
            case Action.DO_POST_RESET + "_" + name:
                return { doPostDefaultState };
            default:
                return state;
        }
    };
};

const doUpdateDefaultState = {
    data: null,
    success: false,
    failure: false,
    loading: false,
    error: null
};

export const createDoUpdateReducer = (name = "") => {
    return (state = doUpdateDefaultState, action = {}) => {
        switch (action.type) {
            case Action.DO_UPDATE_REQUEST + "_" + name:
                return {
                    ...doUpdateDefaultState,
                    loading: true
                };
            case Action.DO_UPDATE_SUCCESS + "_" + name:
                return {
                    ...doUpdateDefaultState,
                    success: true,
                    data: action.response.data
                };
            case Action.DO_UPDATE_FAILURE + "_" + name:
                return {
                    ...doUpdateDefaultState,
                    failure: true,
                    error: action.error
                };
            case Action.DO_UPDATE_RESET + "_" + name:
                return {
                    doUpdateDefaultState
                };
            default:
                return state;
        }
    };
};
