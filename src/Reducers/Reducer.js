const iState = {
    list: [
        { id: 1, name: "Test Name 1", phone: 9889765432 },
        { id: 2, name: "Test Name 2", phone: 9889675234 },
    ],
};

const reducer = (state = iState, action) => {
    switch (action.type) {
        case "pushList":
            const list = [...state.list, { id: (state.list.length === 0) ? 1 : state.list[state.list.length - 1].id + 1, name: action.payload.name, phone: parseInt(action.payload.phone) }];
            state.list = list;
            return state;

        case "deleteListById":
            return {
                "list": state.list.filter(data => data.id !== action.payload.id)
            };

        default:
            return state;
    }
}

export default reducer;