import { createContext } from "react";

const UserContext = createContext({
    loggedInUser:"Default User",
    parul:'parul'
});
export default UserContext;