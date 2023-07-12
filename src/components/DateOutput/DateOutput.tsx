import "./DateOutput.css"

const DateOutput = () => {

    return (
        <div className="date-output">
            <label className="date-output__label mr-3" htmlFor="locale">Chose your format:</label>
            <select className="date-output__select mb-2 pl-2 rounded-md text-black" name="locale" id="locale">
                <option value="US">US</option>
                <option value="UK">UK</option>
                <option value="RU">RU</option>
            </select>
            <output className="date-output__result rounded-md" htmlFor="picker">2011-05-24</output>
        </div>
    )
}

export default DateOutput
