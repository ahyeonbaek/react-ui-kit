const TabContent = (props) => {
    const { children, index , isActive} =props;
    return isActive ? <>{children}</> : null;
};

export default TabContent;
