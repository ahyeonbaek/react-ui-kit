import { useState } from "react";
import {Tabs, Carousel, Breadcrumb, Pagination } from "./components";
import Popover from "./components/Popover";



function App() {
    // const handleChangeTab = (index: number) => {
    //     console.log(index);
    // }

    // const [date, setDate] = useState<Date>(new Date()); //현재 날짜

    // const handleChangeDate = (newDate:Date) => {
    //     setDate(newDate);
    // } 

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (newPage:number) => {
        setCurrentPage(newPage);
    }

    return (
        <>
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

            <Carousel itemLength={3}>
                <Carousel.ItemList>
                    <Carousel.Item page={0}></Carousel.Item>
                    <Carousel.Item page={1}></Carousel.Item>
                    <Carousel.Item page={2}></Carousel.Item>
                </Carousel.ItemList>
                <Carousel.Navigator/>
                <Carousel.Indicator/>
            </Carousel>

            <Breadcrumb width='100px'>
                <Breadcrumb.Item href='/a'>A</Breadcrumb.Item>
                <Breadcrumb.Item href='/a-a'>A-A</Breadcrumb.Item>
                <Breadcrumb.Item href='/a-a-a'>A-A-A</Breadcrumb.Item> 
                <Breadcrumb.Item href='/a-a-a-a'>A-A-A-A</Breadcrumb.Item>
            </Breadcrumb>

            {/* <Calendar onChange={handleChangeDate} value={date}>
                <Calendar.Current />
                <Calendar.Navigator />
                <Calendar.Body />
            </Calendar>; */}

            <Pagination itemLength={276} value={currentPage} onPageChange={handlePageChange} itemsPerPage={10}>
                <Pagination.PageButtons />
                <Pagination.Navigator />
            </Pagination>

            <Popover>
                <Popover.Trigger>Open</Popover.Trigger>
                <Popover.Content position='bottom-center'>Place content for the popover here.</Popover.Content>
            </Popover>
        </>
    )
}

export default App;