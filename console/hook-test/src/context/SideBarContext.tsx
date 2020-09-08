import React, { useReducer, ReducerWithoutAction } from 'react'
import { Action } from '@reduxjs/toolkit';

type SidebarShowType = true|false|'responsive';

type SideBarState = {
  sidebarShow: SidebarShowType
  count: number
}
const initState = {
  sidebarShow: 'responsive' as SidebarShowType
  , count: 0
};

const Actions = {
  increment: {
    type: 'increment'
  }
  , decrement: {
    type: 'decrement'
  }
}

const sideBarReducer = (state: SideBarState, action: Action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const nextSidebarShow = (sidebarShow: SidebarShowType, isMobile: boolean) => {
  return [!isMobile, 'responsive'].includes(sidebarShow) ? isMobile : 'responsive'
}

const SideBarContext = React.createContext(initState);

const SideBarContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(sideBarReducer, initState)
 return (
   //@ts-ignore
    <SideBarContext.Provider value={{state, dispatch}}>
      {props.children}
    </SideBarContext.Provider>
  );
}

export { SideBarContext, SideBarContextProvider, Actions, nextSidebarShow };
export type {SidebarShowType, SideBarState}