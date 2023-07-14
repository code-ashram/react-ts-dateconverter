import "./DateOutput.css"
import {ChangeEvent, FC} from "react";

type Props = {
    region: string
    onChangeRegion: (value: string) => void
    convertedDate: string
}

const DateOutput: FC<Props> = ({region, onChangeRegion, convertedDate}) => {
    const handleChangeValue = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeRegion(e.target.value)
    }

    return (
        <div className="date-output">
            <label className="date-output__label mr-3" htmlFor="locale">Choose your format:</label>
            <select className="date-output__select mb-2 rounded-md text-black" name="locale" id="locale" value={region}
                    onChange={handleChangeValue}>
                <option value="en-US">US</option>
                <option value="en-GB">UK</option>
                <option value="ru-RU">RU</option>
            </select>
            <output className="date-output__result rounded-md" htmlFor="picker">{convertedDate}</output>
        </div>
    )
}

export default DateOutput
