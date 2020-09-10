import React, {useEffect, useState, useRef} from "react";
import HeaderComp, {HeaderCompProps} from "../header/Header";
import { useHistory } from 'react-router-dom';

export interface MainPageWrapCompProps {
    contentComp: () => JSX.Element
    , headerCompProps: HeaderCompProps
};
//
const MainPageWrapComp = (props: any) => {
    console.log(`MainPageWrapComp called`);
    const history = useHistory();
    const his = history.location.pathname;
    const hisRef = useRef<{history?: any}>({});

    console.log(`state 초기화: ${his}`)

    const [state] = useState(() => {
        return his;
    })

    
    // 뭔가 다르긴하네; 음.. 아닌가.. 아 이전상태를 모르는구나 이거? 음 아닌데,,
    useEffect(()=> {
        console.log(`이전 history: ${hisRef.current.history}`)
        console.log(`현재 history: ${his}`)
        hisRef.current.history = his;

    }, [his])
    useEffect(() => {
        console.log("@@@@@@@@@@@@@@@@@@@ MainPageWrapComp 초기화")
        return () => {
            console.log("##### MainPageWrapComp unmount")
        }

    }, [])

    return (
        <>
            <HeaderComp key={"test"} {...props.headerCompProps}/>
            {props.children}
        </>
    );
};

// class MainPageWrapComp extends React.Component<MainPageWrapCompProps> {
//     render() {
//         return (
//             <>
//                 <HeaderComp {...this.props.headerCompProps}/>
//                 {this.props.contentComp()}
//             </>
//         );
//     }
//     componentDidMount() {
//         console.log("MainPageWrapComp comp mount")
//     }
//     componentWillUnmount() {
//         console.log("MainPageWrapComp comp unmount")
//     }
//     componentWillUpdate(props: any) {
//         console.log(
//             "MainPageWrapComp comp update"
//             , this.props
//             ," -> "
//             , props
//         )
//     }
// }
//
export default MainPageWrapComp;