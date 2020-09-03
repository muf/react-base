import React from "react";
import HeaderComp, {HeaderCompProps} from "../header/Header";

export interface MainPageWrapCompProps {
    contentComp: () => JSX.Element
    , headerCompProps: HeaderCompProps
};
//
// export const MainPageWrapComp = (props: MainPageWrapCompProps) => {
//     return (
//         <>
//             <HeaderComp {...props.headerCompProps}/>
//             {props.contentComp()}
//         </>
//     );
// };
class MainPageWrapComp2 extends React.Component<MainPageWrapCompProps> {
    render() {
        return (
            <>
                <HeaderComp {...this.props.headerCompProps}/>
                {this.props.contentComp()}
            </>
        );
    }
    componentDidMount() {
        console.log("MainPageWrapComp comp mount")
    }
    componentWillUnmount() {
        console.log("MainPageWrapComp comp unmount")
    }
    componentWillUpdate(props: any) {
        console.log(
            "MainPageWrapComp comp update"
            , this.props
            ," -> "
            , props
        )
    }
}

export default MainPageWrapComp2;