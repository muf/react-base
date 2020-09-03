import React from "react";
import HeaderComp, {HeaderCompProps} from "../header/Header";

export interface MainPageWrapCompProps {
    contentComp: () => JSX.Element
    , headerCompProps: HeaderCompProps
};
//
const MainPageWrapComp = (props: any) => {
    console.log(`MainPageWrapComp called`);

    return (
        <>
            <HeaderComp {...props.headerCompProps}/>
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