import {ChangeEvent, FC, useState} from "react";

import "./DateConverter.css"

enum LOCALE {
    US = "en-US",
    GB = "en-GB",
    RU = "ru-RU",
}

type Props = {
    convertedDate: string
}

const DateConverter: FC<Props> = ({convertedDate}) => {
    const [locale, setLocale] = useState<LOCALE>(LOCALE.US)

    const handleSelectLocale = (e: ChangeEvent<HTMLSelectElement>) => {
        setLocale(e.target.value as LOCALE)
    }

    return (
        <div className="date-output">
            <label className="date-output__label mr-3" htmlFor="locale">Chose your format:</label>
            <select className="date-output__select mb-2 pl-2 rounded-md text-black" name="locale" id="locale"
                    value={locale} onChange={handleSelectLocale}>
                <option value={LOCALE.US}>US</option>
                <option value={LOCALE.GB}>UK</option>
                <option value={LOCALE.RU}>RU</option>
            </select>
            <output className="date-output__result rounded-md" htmlFor="picker">{convertedDate}</output>
        </div>
    )
}

export default DateConverter
