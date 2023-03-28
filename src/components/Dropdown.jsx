import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';


const DropdownSelector = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selected, setSelected] = useState(props.value);
    const navigate = useNavigate();

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const setValue = (e) => {
        setSelected(e)
        if (e === 'VERIFIER') {
            navigate('/verifier-s1')

        } else if (e === 'HOLDER') {
            navigate('/holder-s1')
        } else {
            navigate('/')
        }
    }


    return (

        (location.pathname === '/' || !location.pathname) ? (
            < div >
                <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down" color="#1F437A">
                    <DropdownToggle className={{ color: '#1F437A' }} caret>{selected}</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => setValue('VERIFIER')}>VERIFIER</DropdownItem>
                        <DropdownItem onClick={() => setValue('HOLDER')}>HOLDER</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div >
        ) : (
            < div >
                <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down" color="#1F437A">
                    <DropdownToggle className={{ color: '#1F437A' }} caret>{selected}</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => setValue('VERIFIER')}>VERIFIER</DropdownItem>
                        <DropdownItem onClick={() => setValue('HOLDER')}>HOLDER</DropdownItem>
                        <DropdownItem onClick={() => setValue('LOGOUT')}>LOG OUT</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div >
        )
    );
};

export default DropdownSelector;