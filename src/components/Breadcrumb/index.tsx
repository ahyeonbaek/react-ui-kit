import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import BreadcrumbItem from "./BreadcrumbItem";
import { breadBaseCls } from "@consts/className";

interface ComponentType {
  Item: typeof BreadcrumbItem;
}

interface BreadcrumbProps {
  width: string;
  className?: string;
}

interface BreadcrumbProps extends PropsWithChildren {}

const Breadcrumb: FC<BreadcrumbProps> & ComponentType = (props) => {
  const { children, width, className } = props;
  const containerWidth = parseInt(width, 10); // prop으로 받은 넓이 string -> number로 바꾸기
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsWidth, setItemWidth] = useState(0);
  const [visible, setVisible] = useState<React.ReactNode[]>([]); // 아이템 처음, 끝
  const [hidden, setHidden] = useState<React.ReactNode[]>([]); // 아이템 처음,끝 제외한 나머지 아이템들
  const [isItemsOpen, setIsItemsOpen] = useState(false);

  const items = React.Children.toArray(children);

  const breadCls = useMemo(() => {
    return className ? `${className} ${breadBaseCls}` : breadBaseCls;
  }, [className]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setItemWidth(container.getBoundingClientRect().width);
    }

    if (itemsWidth > containerWidth) {
      setVisible([items[0], items[items.length - 1]]);
      setHidden(items.slice(1, items.length - 1));
    } else {
      setVisible(items);
    }
  }, [containerWidth, itemsWidth]);
  //내부 요소의 크기가 100px 보다 커지면 맨 처음과 맨 끝만 보이고, 나머지는 가려짐
  // ... 을 클릭했을 때 나머지 보여줌

  // ... 클릭하면 숨겨진 아이템 보여주기
  const handleClickDropdown = () => {
    setIsItemsOpen(!isItemsOpen);
  };

  return (
    <div ref={containerRef} style={{ display: "flex", alignItems: "center" }}>
      {hidden.length > 0 ? (
        <div className={breadCls}>
          <div>{items[0]}</div>
          <p> - </p>
          <button onClick={handleClickDropdown}> ... </button>
          <p> - </p>
          <div style={{ width: "100px" }}>{items[items.length - 1]}</div>
        </div>
      ) : (
        visible.map((item, index) => (
          <div key={index} className={breadCls}>
            <div>{item}</div>
            <div>{index < visible.length - 1 && <p> - </p>}</div>
          </div>
        ))
      )}
    </div>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
