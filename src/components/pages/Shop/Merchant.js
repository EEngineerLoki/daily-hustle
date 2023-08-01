import { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Dropdown({selected, setSelected}) {

    const [isActive, setIsActive] = useState(false);
    const options = ["Amazon", "Shopify", "Shopee", "Lazada"];

    return (
        <div className="dropdown">
            <div className="dropdown__button" onClick={(e) => 
            setIsActive(!isActive)}>
                <div className="dropdown__merchant">
                    {selected}
                </div>
                <ArrowDropDownIcon/>
        </div>
            {isActive && (
                <div className="dropdown__content">
                    {options.map((option) => (
                        <div onClick={
                            (e) => {
                                setSelected(option);
                                setIsActive(false);
                            }
                        } className="dropdown__item">{option}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;