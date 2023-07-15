import {useState} from "react";
import DateReset from "./components/DateReset";
import DatePicker from "./components/DatePicker";
import DateConverter from "./components/DateConverter";
import {today} from "./utils.ts";

import './App.css'

function App() {
    const [date, setDate] = useState<string>(today)

    const handleSelectDate = (chosenDate: string) => setDate(chosenDate)

    const handleResetDate = () => setDate("")

    return (
        <div>
            <h1 className="title text-4xl font-bold text-emerald-700 underline">React + Ts Date Formatter</h1>
            <DatePicker date={date} onSelectDate={handleSelectDate}/>
            <DateConverter convertedDate={date}/>
            <DateReset onPressReset={handleResetDate}/>
        </div>
    )
}

export default App
