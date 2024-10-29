const AccordionButton = (props) => {
    const {title, index, onClickAccordionButton} = props;
    const handleClickButton = () => {
        onClickAccordionButton(index);
    }
    return (
        <div>
            <h3>{title}</h3>
            <button onClick={handleClickButton}>expand</button>
        </div>
    );
};

export default AccordionButton;