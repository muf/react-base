const TodoStatusConstants = {
    ACTIVE: 'active'
    , INACTIVE: 'inactive'
}

const ActionCreator = {
    add: {
        build: (payload) => {
            return {
                type: 'ADD'
                , payload
            };
        }
        , type: 'ADD'

    }
};

const defaultState = [
    {
        name: 'test'
        , status: TodoStatusConstants.ACTIVE  
    }
];

const add = () => {
    console.log("btn clicked");
    store.dispatch(ActionCreator.add.build({
        name: document.getElementById('todo_input').value
        , status: TodoStatusConstants.INACTIVE
    }));
}
const renderTodoList = (state) => {
    const ulElement = document.createElement("ul");
    const liElements = state.map((elem)=> {
        const liElement = document.createElement("li");
        liElement.append(elem.name);
        ulElement.appendChild(liElement);
    });
    console.log(ulElement);

    document.getElementById('todo_list_area').appendChild(ulElement);
}
const todoReducer = (state = defaultState, action) => {
    console.log(action);

    switch (action.type) {
        case 'ADD':
            return [...state, {...action, compeleted: false}];
        default:
            return state;
    }
}

let store = Redux.createStore(todoReducer);

store.subscribe(() => {
    console.log("callback called!")
    renderTodoList(store.getState());
    console.log(store.getState());
});

window.onload =  () => {
    renderTodoList(store.getState());
}