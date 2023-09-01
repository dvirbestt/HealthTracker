const info = {
    userInfo : 0
}

export function infoReducer  (state = info, action) {

    switch (action.type){
        case "ADD" :
            return {userInfo : action.payload};
        default :
            return state;
    }

}