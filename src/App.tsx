import DateReset from "./components/DateReset";
import DatePicker from "./components/DatePicker";
import DateConverter from "./components/DateConverter";

import './App.css'

function App() {



    return (
        <div>
            <h1 className="title text-4xl font-bold text-emerald-700 underline">React + Ts Date Formatter</h1>
            <DatePicker/>
            <DateConverter convertedDate={'2023-12-12'}/>
            <DateReset/>
        </div>
    )
}

export default App
