const AccordionContent = (props) => {

        const { children, isActive } = props;
        return isActive ? <>{children}</> : null;
};

export default AccordionContent;