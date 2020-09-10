import React from 'react';
import {ListPresenter, ListPresenterType, ListItemType} from "./ListPresenter";
import {useSelector, useStore} from "react-redux";
import {useHistory} from "react-router-dom";
import {RootState} from "../index";


export const ListContainer = () => {
    const pageId = useSelector<RootState>(state => state.testState.id);
    const pathname = useHistory().location.pathname;

    console.log(`@@@ PageId: ${pageId} AND pathname is ${pathname}`);

    const items: ListPresenterType = pageId == '/main/1' ? {
        list: [
            { id: 1, title: "1번 아이템!", desc: "설명 1입니다." } as ListItemType
            , { id: 2, title: "2번 아이템!", desc: "설명 2입니다." } as ListItemType
        ]
    }: pageId == '0' ? {
        list: [{id:0, title:"새로 로딩중입니다.", desc:"기다리세요"}]
    } : {
        list: [
            { id: 1, title: "2페이지 1번 아이템!", desc: "ㅇㅁㄴㅇ" } as ListItemType
        ]
    };
    return (
        <>
            <ListPresenter {...items}/>
        </>
    );
}
