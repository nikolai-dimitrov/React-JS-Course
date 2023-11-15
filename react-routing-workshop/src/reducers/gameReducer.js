export const gameReducer = (state, action) => {
    switch (action.type) {
        case "GAME_FETCH":
            return action.game;
        case "COMMENT_ADD":
            console.log(state);
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.payload,
                        author: {
                            email: action.email,
                        },
                    },
                ],
            };
        default:
            return state;
    }
};
