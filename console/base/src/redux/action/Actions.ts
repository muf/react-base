import {Action} from 'redux';
/**
 * Action Type들을 하나의 파일에 명시
 * (많아질 경우 별도 분리)
 */

export type CommonAction<P> = {
    type: string
    payload: P
}

const asyncActionType = (prefix: string) => ({
    REQUESTED: `${prefix}_REQUESTED`
    , SUCCESS: `${prefix}_SUCCESS`
    , ERROR: `${prefix}_ERROR`
});

export const testAction = {
    type: {
        TEST_FETCH: asyncActionType('TEST')
        , TEST_UPDATE: 'TEST_UPDATE'
        , TEST_INIT: 'TEST_INIT'
    }
    , ac: {
        update: (page: number): CommonAction<number> => {
            return { type: testAction.type.TEST_UPDATE, payload: 3 }
        }
    }
};