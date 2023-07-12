const DatePicker = () => {

    return (
        <div className="date-picker mb-2">
            <label className="date-picker__label mr-3" htmlFor="picker">Chose date here:</label>
            <input className="date-picker__input pl-2 rounded-md text-black" type="date" name="date-picker" id="picker"/>
        </div>
    )
}

export default DatePicker
