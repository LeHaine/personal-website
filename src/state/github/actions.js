import { fetchData } from "../utils/actions";
import { USER_EVENT } from "./reducer-type";

const GITHUB_API_URL = "https://api.github.com/";
const GITHUB_USER = "LeHaine";

export const fetchUserEvents = (id = "") => {
    return fetchData(
        GITHUB_API_URL + "users/" + GITHUB_USER + "/events",
        USER_EVENT
    );
};
