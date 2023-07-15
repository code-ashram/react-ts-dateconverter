import {ChangeEvent, FC} from "react";

type Props = {
    onSelectDate: (value: string) => void
    onClickDate: (value: Date | undefined) => void
    date: string
}

const DatePicker: FC<Props> = ({date, onClickDate, onSelectDate}) => {
    const handleSelectDate = (e: ChangeEvent<HTMLInputElement>) => {
        onSelectDate(e.target.value === "" ? new Date().toISOString().slice(0, 10) : String(e.target.value))
        onClickDate(e.target.value === "" ? new Date() : new Date(e.target.value))
    }

    return (
        <div className="date-picker mb-2">
            <label className="date-picker__label mr-3" htmlFor="picker">Select date here:</label>
            <input className="date-picker__input pl-2 rounded-md text-black" type="date" name="date-picker" id="picker"
                   value={date} onChange={handleSelectDate} />
        </div>
    )
}

export default DatePicker
