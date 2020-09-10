import React from 'react';


export type ListItemType = {
    id: number
    title: string
    desc: string
}
export type ListPresenterType = {
    list: ListItemType[]
}
export const ListPresenter = (props: ListPresenterType) => {
    return (
        <>
            {
                props.list.map((item => {
                    return <ItemPresenter key={item.id} {...item}/>
                }))
            }
        </>
    );
};

const ItemPresenter = (item: ListItemType) => {
    return (<>
        <div>
            <span>title: ${item.title}</span>
            <span>title: ${item.desc}</span>
        </div>
    </>);
};