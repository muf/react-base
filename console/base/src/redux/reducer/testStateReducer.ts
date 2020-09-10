export type TestState = {
    page: string
    id: number
}

export const testStateReducer = (state: TestState = {page: 'none', id: 0}, action: any): TestState => {
    switch(action.type) {
        //@ts-ignore
        case 'test':
            console.log("test passed")
            //@ts-ignore
            return {...state, id: action!.payload};
        //@ts-ignore
        case 'page':
            console.log("test passed")
            //@ts-ignore
            return {...state, page: action!.payload};
        default: return {...state}
    }
};