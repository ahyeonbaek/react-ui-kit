import { useEffect, useState } from "react";
import {
  Tabs,
  Carousel,
  Breadcrumb,
  Pagination,
  Popover,
  Calendar,
  Modal,
  DatePicker,
  Select,
  Accordion,
  Progress,
  useToast,
  Toaster,
} from "./components";

function App() {
  const [date, setDate] = useState<Date>(new Date()); //현재 날짜

  const handleChangeDate = (newDate: Date) => {
    setDate(newDate);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleChangeDatePicker = (date: Date) => {
    console.log(date);
  };

  const [selectedValue, setSelectedValue] = useState<string>("1");
  const handleChangeValue = (selectedValue: string) => {
    setSelectedValue(selectedValue);
  };

  /* progress */
  const [stop, setStop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStop(true);
    }, 3000); // 5초 후 stop 활성화

    return () => clearTimeout(timer);
  }, []);

  /* toast */
  const toast = useToast();
  const handleClickOpenToast = () => {
    toast({
      title: "ToastTitle",
      description: "ToastDescription",
      buttonCustom: "close",
      className: "toast-content",
    });
  };

  return (
    <>
      <h1>Toast</h1>
      <Toaster />
      <button onClick={() => handleClickOpenToast()}>open toast</button>
      <Progress stop={stop}></Progress>
      <h1>Select</h1>
      <Select
        onChange={handleChangeValue}
        value={selectedValue}
        label="메뉴 선택"
      >
        {/** 클릭 시 Option들을 보여주고, 선택된 option를 보여줌 **/}
        <Select.Trigger />
        {/** 보여질 Option들을 나열 **/}
        <Select.Content>
          <Select.Item value={"1"}>One</Select.Item>
          <Select.Item value={"2"}>Two</Select.Item>
          <Select.Item value={"3"}>Three</Select.Item>
        </Select.Content>
      </Select>
      <h1>DatePicker</h1>
      <DatePicker onChangeDate={handleChangeDatePicker} />
      <h1>Popover</h1>
      <Popover>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content position="bottom-center">
          Place content for the popover here.
        </Popover.Content>
      </Popover>
      <h1>Tabs</h1>
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
      <h1>Carousel</h1>
      <Carousel itemLength={3}>
        <Carousel.ItemList>
          <Carousel.Item page={0}></Carousel.Item>
          <Carousel.Item page={1}></Carousel.Item>
          <Carousel.Item page={2}></Carousel.Item>
        </Carousel.ItemList>
        <Carousel.PrevNavigator />
        <Carousel.NextNavigator />
        <Carousel.Indicator />
      </Carousel>
      <h1>Breadcrumb</h1>
      <Breadcrumb width="100px">
        <Breadcrumb.Item href="/a">A</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a">A-A</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a">A-A-A</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a-a">A-A-A-A</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Calendar</h1>
      <Calendar onChange={handleChangeDate} value={date}>
        <Calendar.Current />
        <Calendar.Navigator />
        <Calendar.Body />
      </Calendar>
      <h1>Pagination</h1>
      <Pagination
        itemLength={276}
        value={currentPage}
        onPageChange={handlePageChange}
        itemsPerPage={10}
      >
        <Pagination.PageButtons />
        <Pagination.Navigator />
      </Pagination>
      <h1>Modal</h1>
      <Modal
        onCloseModal={handleCloseModal}
        onOpenModal={handleOpenModal}
        open={isOpen}
      >
        <Modal.Backdrop />
        <Modal.Trigger>
          <a href="#">Custom-Trigger</a>
          <button>open Modal</button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Close>
            <a href="#">x</a>
            <button>close</button>
          </Modal.Close>
          <div>Modal Content</div>
          <div>Modal Content</div>
        </Modal.Content>
      </Modal>
      <Accordion>
        <Accordion.Item>
          <Accordion.Trigger>first</Accordion.Trigger>
          <Accordion.Content>first content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Trigger>second</Accordion.Trigger>
          <Accordion.Content>second content</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Trigger>third</Accordion.Trigger>
          <Accordion.Content>third content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default App;
