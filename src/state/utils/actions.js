import { CALL_API } from "../middleware/api";
import * as Action from "./action-types";

export const fetchData = (endpoint, name = "") => {
    return {
        [CALL_API]: {
            method: "GET",
            endpoint: endpoint,
            types: [
                Action.FETCH_DATA_REQUEST + "_" + name,
                Action.FETCH_DATA_SUCCESS + "_" + name,
                Action.FETCH_DATA_FAILURE + "_" + name
            ]
        }
    };
};

export const resetFetchdata = name => ({
    type: Action.FETCH_DATA_RESET + "_" + name
});

export const doPost = (endpoint, data, name = "", multipart = false) => {
    return {
        [CALL_API]: {
            method: "POST",
            endpoint: endpoint,
            data: data,
            multipart: multipart,
            types: [
                Action.DO_POST_REQUEST + "_" + name,
                Action.DO_POST_SUCCESS + "_" + name,
                Action.DO_POST_FAILURE + "_" + name
            ]
        }
    };
};

export const resetPostdata = name => ({
    type: Action.DO_POST_RESET + "_" + name
});

export const doUpdate = (endpoint, data, name = "") => {
    return {
        [CALL_API]: {
            method: "PUT",
            endpoint: endpoint,
            data: data,
            types: [
                Action.DO_UPDATE_REQUEST + "_" + name,
                Action.DO_UPDATE_SUCCESS + "_" + name,
                Action.DO_UPDATE_FAILURE + "_" + name
            ]
        }
    };
};

export const resteUpdateData = name => ({
    type: Action.DO_UPDATE_RESET + "_" + name
});
