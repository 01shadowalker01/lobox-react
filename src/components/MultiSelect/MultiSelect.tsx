import { useState } from "react"
import MultiSelectInput from "../MultiSelectInput/MultiSelectInput"

const MultiSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <MultiSelectInput isOpen={isOpen} />
        </div>
    )
}

export default MultiSelect