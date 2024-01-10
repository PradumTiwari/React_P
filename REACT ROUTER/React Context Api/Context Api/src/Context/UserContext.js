import React from "react";

const UserContext=React.createContext();

export default UserContext;
//When we wrap it will becoome provider
//All component inside it will be able to access the UserContext
<UserContext>

</UserContext>