import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {counterSlice, selectCount} from "../counter/counterSlice";
import {Test} from "../Test";

export interface HeaderCompProps {
    title: string
}
//

const HeaderComp = (props: HeaderCompProps) => {
    console.log("nani?!!!!")
    useEffect(() => {
        // Update the document title using the browser API
        console.log("@@@@@@@@@@@@@@@@@effect mount")
        return (() => {
            console.log("@@@@@@@@@@@@@@@@@@@header umount")
        })
    }, []);

    const [count, setCount] = useState(0);
    // const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const { increment, decrement, incrementByAmount } = counterSlice.actions;



    console.log(`HeaderComp`)
    console.log(props, ' / ', count)

    return (
        <div>
            <span>{`> ${props.title}`}</span>
            <span> This is HeaderComp.</span>
            <span>${count}</span>
            <button onClick={() => setCount(state => state +1)}> + </button>
            <Test />
        </div>
    );
};
// class HeaderComp extends React.Component<HeaderCompProps> {
//     render() {
//         return (
//             <div>
//                 <span>{`> ${this.props.title}`}</span>
//                 <span> This is HeaderComp.</span>
//             </div>
//         );
//     }
//     componentDidMount() {
//         console.log("header comp mount")
//     }
//     componentWillUnmount() {
//         console.log("header comp unmount")
//     }
//     componentWillUpdate(props: any) {
//         console.log(
//             "header comp update"
//             , this.props
//             ," -> "
//             , props
//         )
//     }
// }

export default HeaderComp;