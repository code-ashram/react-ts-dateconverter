import ResetButton from "./components/ResetButton";
import DatePicker from "./components/DatePicker";
import DateOutput from "./components/DateOutput";

import './App.css'

function App() {

    return (
        <div>
            <h1 className="title text-4xl font-bold text-emerald-700 underline">React + Ts Date Formatter</h1>
            <DatePicker/>
            <DateOutput/>
            <ResetButton/>
        </div>
    )
}

export default App
