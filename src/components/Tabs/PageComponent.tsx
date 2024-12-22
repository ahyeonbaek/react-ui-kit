import Tabs from ".";


const PageComponent = () => {
    
    return (
        <Tabs>
            <Tabs.MenuList>
            <Tabs.Menu index={1}>Menu1</Tabs.Menu>
            <Tabs.Menu index={2}>Menu2</Tabs.Menu>
            <Tabs.Menu index={3}>Menu3</Tabs.Menu>
            </Tabs.MenuList>
            <Tabs.Pannel index={1}>Content1</Tabs.Pannel>
            <Tabs.Pannel index={2}>Content2</Tabs.Pannel>
            <Tabs.Pannel index={3}>Content3</Tabs.Pannel>
        </Tabs>
        );
    };

    export default PageComponent;