const prefixCls = "hw";

const getBaseCls = (suffix: string) => {
  return `${prefixCls}-${suffix}`;
};

/* Tabs Component */
export const tabsBaseCls = getBaseCls("tabs");
export const tabsMenuListBaseCls = getBaseCls("tabs-menu-list");
export const tabsMenuBaseCls = getBaseCls("tabs-menu");
export const tabsPannelBaseCls = getBaseCls("tabs-pannel");

/* Carousel Component*/
export const carouselBaseCls = getBaseCls("carousel");
export const carouselItemListBaseCls = getBaseCls("carousel-item-list");
export const carouselItemBaseCls = getBaseCls("carousel-item");
export const carouselNavigatorBaseCls = getBaseCls("carousel-navigator");
export const carouselIndicatorBaseCls = getBaseCls("carousel-indicator");

/* BreadCrum Component*/
export const breadBaseCls = getBaseCls("breadcrumb");
export const breadItemBaseCls = getBaseCls("breadcrumb-item");

/* Calendar Component*/
export const CalendarBaseCls = getBaseCls("calendar");
export const CalendarBodyBaseCls = getBaseCls("calendar-body");
export const CalendarCurrentBaseCls = getBaseCls("calendar-current");
export const CalendarNavigatorBaseCls = getBaseCls("calendar-navigator");

/* DatePicker */
export const DatePickerBaseCls = getBaseCls("datepicker");

/* Modal */
export const ModalBaseCls = getBaseCls("modal");
export const ModalBackdropBaseCls = getBaseCls("modal-backdrop");
export const ModalContentBaseCls = getBaseCls("modal-content");
export const ModalTriggerBaseCls = getBaseCls("modal-trigger");
export const ModalCloseBaseCls = getBaseCls("modal-close");

/* Pagination */
export const PaginationBaseCls = getBaseCls("pagination");
export const PaginationNavigatorBaseCls = getBaseCls("pagination-navigator");
export const PaginationButtonBaseCls = getBaseCls("pagination-button");

/* Popover */
export const PopoverBaseCls = getBaseCls("popover");
export const PopoverContentBaseCls = getBaseCls("popover-content");
export const popoverTriggerBaseCls = getBaseCls("popover-trigger");

/* Select */
export const SelectBaseCls = getBaseCls("select");
export const SelectContentBaseCls = getBaseCls("select-content");
export const SelectItemBaseCls = getBaseCls("select-item");
export const SelectTriggerBaseCls = getBaseCls("select-trigger");

/* Accordion */
export const AccordionBaseCls = getBaseCls("accordion");
export const AccordionItemBaseCls = getBaseCls("accordion-item");
export const AccordionTriggerBaseCls = getBaseCls("accordion-trigger");
export const AccordionContentBaseCls = getBaseCls("accordion-content");
