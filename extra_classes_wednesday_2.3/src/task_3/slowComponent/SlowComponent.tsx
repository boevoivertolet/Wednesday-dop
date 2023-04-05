import {memo, useEffect} from "react";

export const SlowComponent = memo(() => {
    console.log('SlowComponent re-render...');

    let now = performance.now();

   // useMemo(()=> {
   //     while (performance.now() - now < 1000) {
   //         // Artificial delay -- do nothing for 100ms
   //     }
   // },[])

    useEffect(()=> {
        while (performance.now() - now < 1000) {
            // Artificial delay -- do nothing for 100ms
        }
    },[])

    return <p>I am a very slow component tree.</p>;
});
