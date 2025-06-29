import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import "./MultiSelectInput.scss";

interface MultiSelectInputProps {
    isOpen: boolean;
}

const MultiSelectInput = ({ isOpen }: MultiSelectInputProps) => {
    return (
        <div className="multi-select-input">
            <input />
            {
                isOpen ?
                    <FaAngleUp className="select-icon" />
                    : <FaAngleDown className="select-icon" />
            }
        </div>
    )
}

export default MultiSelectInput