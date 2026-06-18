const { useState } = React;

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="counter-card">
            <h2>React Counter App</h2>
            <div className="counter-value">{count}</div>
            <div className="button-group">
                <button className="btn-decrement" onClick={decrement}>- Decrement</button>
                <button className="btn-reset" onClick={reset}>Reset</button>
                <button className="btn-increment" onClick={increment}>+ Increment</button>
            </div>
        </div>
    );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<Counter />);