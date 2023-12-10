import { useState } from "react"

function MyButton({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Current click count {count}
        </button>
    )
}

export default function MyApp() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    );
}