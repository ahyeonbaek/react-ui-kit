import { FC, ReactNode, useMemo } from "react";
import { breadItemBaseCls } from "@consts/className";

interface BreadcrumbItemProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  href,
  children,
  className,
}) => {
  const breadItemCls = useMemo(() => {
    return className ? `${className} ${breadItemBaseCls}` : breadItemBaseCls;
  }, [className]);

  return (
    <a href={href} className={breadItemCls}>
      {children}
    </a>
  );
};

export default BreadcrumbItem;
