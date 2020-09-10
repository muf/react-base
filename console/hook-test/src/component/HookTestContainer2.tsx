import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";

export const HookTestContainer2 = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState<Boolean|null>(null);
    const testRef2 = useRef(1);

    console.log(`version: ${testRef2.current}: isLoading: ${isLoading}, isError: ${isError}`)
    // useEffect(() => {
    //     setIsLoading(true)
    // })
    // useEffect(() => {
    //     setIsLoading(false)
    // })
    // 뭔가 확실히 머지되는 그런게 있는 느낌임
    //@ts-ignore
    useEffect(() => {
        const callApi = async () => {
            console.log('start')
            // 이건 같이되고 (ㄴㄴ 그게 아니라 error가 원래 false라서 로직을 안탄거 같은데? 그럴리가 이거 무조건 타는거 같던데..)
            // 뭐지 null로 해도 여기만 같이 타네,, 음.. 그냥 같이 탈수도 있고 아닐 수도 있다고 생각하는게 나을것 같다 아무래도 axios 전송 때문에 약간의 지연이 있어서 두개가 같이 뭉칠 시간이 마련된 것 같음
            setIsError(false)
            setIsLoading(true)
            const result = await axios(
                `http://localhost:3100/test?timeout=1000`
            )
            // console.log(result.data.data[0])
            console.log('end')
            //이건 따로되네,,? (상태 변화가 실제 없을 지라도 set State 호출되면 전체를 다시 탄다. 그게 실제 dom 랜더링을 시키진 않지만,, 호출은 무조건 됨 - 싫으면 pure로 만들면됨 아니면 "부분적으로 의존성 추가")
            // 아니구나 Memo 안되지 참ㅋㅋㅋ,, 따로 컴포넌트를 분리해야 가능할듯..
            setIsError(false)
        };
        callApi();
    }, []); 

    // 마지막에 이거 왜 안탐??...??? async는 뭐가 다른가..? effect 실행 안함 설마? 음 아닌데 위에건 하는데,, ㅠ
    useEffect(() => {
        console.log('last effect')
        testRef2.current = testRef2.current + 1
    })
    return (
        <>
            <div>{0}</div>
        </>
    )
}