import {testAction} from "../action/Actions";

export type TestState = {
    page: string
    id: number
}

export const testStateReducer = (state: TestState = {page: 'none', id: 0}, action: any): TestState => {
    switch(action.type) {
        //@ts-ignore
        case testAction.type.TEST_UPDATE:
            //@ts-ignore
            return {...state, id: action!.payload};
        default: return {...state}
    }
};