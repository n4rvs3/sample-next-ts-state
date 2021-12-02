import { useState } from "react";

export const getServerSideProps = () => {
    return {props: {initialCount: null}}
}

export default function Counter({ initialCount }) {
    const [count, setCount] = useState(initialCount)

    return (
        <div>
            {count}
            <button onClick={() => setCount((cnt: number) => cnt += 1)}>+1</button>
            <button onClick={() => setCount((cnt: number) => cnt -= 1)}>-1</button>
        </div>
    )
}

