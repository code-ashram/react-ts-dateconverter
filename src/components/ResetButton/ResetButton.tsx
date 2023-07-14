import {FC} from "react";

type Props = {
    onReset: () => void
}
const ResetButton: FC<Props> = ({onReset}) => {
    const handlePressReset = () => onReset()

    return (
        <button className="button mt-3 pr-4 pl-4 text-white p-1 rounded-md bg-red-700" type="reset" onClick={handlePressReset}>Reset</button>
    )
}

export default ResetButton
