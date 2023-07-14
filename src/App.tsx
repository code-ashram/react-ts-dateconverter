import {useState} from "react";

import ResetButton from "./components/ResetButton";
import DatePicker from "./components/DatePicker";
import DateOutput from "./components/DateOutput";
import {today} from "./components/utils.ts";

import './App.css'

function App() {
    const [calendarDate, setCalendarDate] = useState(today)
    const [chosenDate, setChosenDate] =useState(today)
    const [regionName, setRegionName] = useState('en-US')

    const handleConvertDate = (date: Date) => setChosenDate(new Intl.DateTimeFormat(regionName).format(date))

    const handleChangeRegion = (value: string) => {
        setRegionName(value)
        console.log(value)
        handleConvertDate(new Date(calendarDate))
    }

    const handleResetDate = () => setCalendarDate(today)

    return (
        <div>
            <h1 className="title text-4xl font-bold text-emerald-700 underline">React + Ts Date Formatter</h1>
            <DatePicker date={calendarDate} onSelectDate={setCalendarDate} onClickDate={handleConvertDate}/>
            <DateOutput region={regionName} onChangeRegion={handleChangeRegion} convertedDate={chosenDate}/>
            <ResetButton onReset={handleResetDate}/>
        </div>
    )
}

export default App
