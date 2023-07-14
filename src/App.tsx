import {useState} from "react";

import ResetButton from "./components/ResetButton";
import DatePicker from "./components/DatePicker";
import DateOutput from "./components/DateOutput";
import {today} from "./components/utils.ts";

import './App.css'

function App() {
    const [calendarDate, setCalendarDate] = useState<string>(today)
    const [chosenDate, setChosenDate] =useState<string>(today)
    const [regionName, setRegionName] = useState('en-US')

    const handleConvertDate = (date: Date) => setChosenDate(new Intl.DateTimeFormat(regionName).format(date))

    const handleChangeRegion = (value: string) => {
        setRegionName(value)
        setChosenDate(new Intl.DateTimeFormat(value).format(new Date(calendarDate)))
    }

    const handleResetDate = () => {
        setCalendarDate(today)
        setChosenDate("Select date")
    }

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
