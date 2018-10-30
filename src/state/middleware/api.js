import axios from "axios";

const callApi = (method, headers, data, endpoint, multipart) => {
    let config = {};

    if (typeof headers !== "undefined") {
        config.headers = {
            ...config.headers,
            headers
        };
    }
    config.method = method;
    if (method === "POST" || method === "PUT") {
        if (!multipart) {
            config.data = JSON.stringify(data);
            config.headers = {
                ...config.headers,
                "Content-Type": "application/json"
            };
        } else {
            config.data = data;
            config.headers = {
                ...config.headers,
                "Content-Type": undefined
            };
        }
    }
    config.url = endpoint;
    return axios(config)
        .then(response => {
            return response;
        })
        .catch(err => Promise.reject(err));
};

export const CALL_API = Symbol("Call API");

export default store => next => action => {
    const callAPI = action[CALL_API];

    if (typeof callAPI === "undefined") {
        return next(action);
    }

    let { method, headers, data, endpoint, types, multipart } = callAPI;

    const [requestType, successType, errorType] = types;

    store.dispatch({ type: requestType });

    return callApi(method, headers, data, endpoint, multipart).then(
        response =>
            next({
                response,
                type: successType
            }),
        error =>
            next({
                error: error.response,
                type: errorType
            })
    );
};
