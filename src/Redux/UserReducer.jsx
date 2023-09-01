const user = {
    user : JSON.parse(localStorage.getItem("user")) || 0
}

export function UserReducer(state= user,action){
    switch (action.type){
        case "LOGIN":
            return {user : action.payload.user}
        case "LOGOUT":
            localStorage.clear()
            return {user: 0};
        default:
            return state;
    }
}