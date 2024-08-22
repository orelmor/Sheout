import  { useState, useEffect, useRef } from 'react';
import './CategoriesDropdown.css';

function CategoriesDropdown(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="CategoriesDropdown" ref={dropdownRef}>
            <button className="dropdown-button" onClick={toggleDropdown}>
                Select a Category
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <a href="#">Technology</a>
                    <a href="#">Science</a>
                    <a href="#">Health</a>
                    <a href="#">Sports</a>
                    <a href="#">Arts</a>
                </div>
            )}
        </div>
    );
}

export default CategoriesDropdown;
