import {ChangeEvent, FC} from "react";

type Props = {
    date: string,
    onSelectDate: (value: string) => void
}

const DatePicker: FC<Props> = ({date, onSelectDate}) => {
    const handleSelectDate = (e: ChangeEvent<HTMLInputElement>) => {
        onSelectDate(e.target.value)
    }

    return (
        <div className="date-picker mb-2">
            <label className="date-picker__label mr-3" htmlFor="picker">Chose date here:</label>
            <input className="date-picker__input pl-2 rounded-md text-black" type="date" name="date-picker" id="picker"
                   value={date} onChange={handleSelectDate}/>
        </div>
    )
}

export default DatePicker
