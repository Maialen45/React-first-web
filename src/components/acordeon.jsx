import React, { useState } from "react";

const AcordeonItem = ({ id }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen); // Alternamos el estado de apertura/cierre
    };
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`${id}`}>
                <button
                    className={`accordion-button ${isOpen ? "" : "collapsed"}`} // Alterna entre abierto/cerrado
                    type="button"
                    onClick={toggleCollapse} // Usamos un click para alternar el estado
                    aria-expanded={isOpen}
                    aria-controls={`collapse-${id}`}
                >
                    Accordion Item #{`${id}`}
                </button>
            </h2>
            <div
                id={`collapse-${id}`}
                className={`accordion-collapse collapse ${
                    isOpen ? "show" : ""
                }`} // Clase "show" si está abierto
                aria-labelledby={`heading-${id}`}
            >
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                    These classNamees control the overall appearance, as well as
                    the showing and hiding via CSS transitions. You can modify
                    any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML
                    can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                </div>
            </div>
        </div>
    );
};

const Acordeon = () => {
    const items = [{ id: 1 }, { id: 2 }, { id: 3 }];

    return (
        <div className="accordion" id="accordionExample">
            {items.map((item) => (
                <AcordeonItem key={item.id} id={item.id} />
            ))}
        </div>
    );
};

export default Acordeon;
