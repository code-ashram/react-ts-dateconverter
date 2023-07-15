import {FC} from "react";

type Props = {
    onPressReset: () => void
}

const DateReset: FC<Props> = ({onPressReset}) => {
    const handleResetDate = () => onPressReset()

    return (
        <button className="button mt-3 pr-4 pl-4 text-white p-1 rounded-md bg-red-700" type="reset" onClick={handleResetDate}>Reset</button>
    )
}

export default DateReset
