# react-ui kt (ahyeon-react-ui-kit)

## 프로젝트 소개

> React를 기반으로 한 UI 컴포넌트 라이브러리

## 사용 방법

```
npm install ahyeon-react-ui-kit
```

## Components

### Accordion

#### Children

- `<Accordion>`
- `<Accordion.Item>`
- `<Accordion.Trigger>`
- `<Accordion.Content>`

#### example

```tsx
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
```

---

### Modal

#### Children

- Mdoal
- ModalBackdrop
- ModalTrigger
- ModalContent
- ModalClose

#### example

##### 열림,닫힘 버튼은 여러 개도 가능합니다.

```tsx
<Modal
  onCloseModal={handleCloseModal}
  onOpenModal={handleOpenModal}
  open={isOpen}
>
  <Modal.Backdrop />
  <Modal.Trigger>
    <button>open Modal</button>
  </Modal.Trigger>
  <Modal.Content>
    <Modal.Close>
      <a href="#">x</a>
    </Modal.Close>
    <div>Modal Content</div>
    <div>Modal Content</div>
  </Modal.Content>
</Modal>
```

---

### Pagination

#### Children

- `<Pagination>`
- `<Pagination.PageButtons>`
- `<Pagenation.Navigator>`

#### example

```tsx
<Pagination
  itemLength={276}
  value={currentPage}
  onPageChange={handlePageChange}
  itemsPerPage={10}
>
  <Pagination.PageButtons />
  <Pagination.Navigator />
</Pagination>
```

---

### Calendar

#### Chilren

- `<Calendar>`
- `<Calendar.Current>`
- `<Calendar.Navigator>`
- `<Calendar.Body>`

### example

```tsx
<Calendar onChange={handleChangeDate} value={date}>
  <Calendar.Current />
  <Calendar.Navigator />
  <Calendar.Body />
</Calendar>
```

---

### Breadcrumb

#### Children

- `<Breadcrumb>`
- `<Breadcrumb.Item>`

#### example

```tsx
<Breadcrumb width="100px">
  <Breadcrumb.Item href="/a">A</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a">A-A</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a">A-A-A</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a-a">A-A-A-A</Breadcrumb.Item>
</Breadcrumb>
```

---

### Carousel

#### Children

- `<Carousel>`
- `<Carousel.ItemList>`
- `<Carousel.Item>`
- `<Carousel.Navigator>`
- `<Carousel.Indicator>`

#### example

```tsx
<Carousel itemLength={3}>
  <Carousel.ItemList>
    <Carousel.Item page={0}></Carousel.Item>
    <Carousel.Item page={1}></Carousel.Item>
    <Carousel.Item page={2}></Carousel.Item>
  </Carousel.ItemList>
  <Carousel.Navigator />
  <Carousel.Indicator />
</Carousel>
```

---

### Tabs

#### Children

- `<Tabs>`
- `<Tabs.MenuList>`
- `<Tabs.Menu>`
- `<Tabs.Pannel>`

#### example

```tsx
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
```

---

### Popover

#### Children

- `<Popover>`
- `<Popover.Trigger>`
- `<Popover.Content>`

#### example

```tsx
<Popover>
  <Popover.Trigger>Open</Popover.Trigger>
  <Popover.Content position="bottom-center">
    Place content for the popover here.
  </Popover.Content>
</Popover>
```

---

### DatePicker

#### Children

- `<DatePicker>`

#### example

```tsx
<DatePicker onChangeDate={handleChangeDatePicker} />
```

---

### Select

#### Children

- `<Select>`
- `<Select.Trigger>`
- `<Select.Content>`
- `<Select.Item>`

#### example

```tsx
<Select onChange={handleChangeValue} value={selectedValue}>
  {/** 클릭 시 Option들을 보여주고, 선택된 option를 보여줌 **/}
  <Select.Trigger />
  {/** 보여질 Option들을 나열 **/}
  <Select.Content>
    <Select.Item value={"1"}>One</Select.Item>
    <Select.Item value={"2"}>Two</Select.Item>
    <Select.Item value={"3"}>Three</Select.Item>
  </Select.Content>
</Select>
```

---

### Toast

#### Children

- `<Toster>`

#### example

```tsx
<Toaster />
<button onClick={() => handleClickOpenToast()}> open toast </button>
```
