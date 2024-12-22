import { FC, ReactNode } from "react";

interface BreadcrumbItemProps {
    href: string;
    children: ReactNode;
}

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({href, children}) => {
    return(
        <div>
            <a href={href} >
                {children}
            </a>
        </div>
    );
};

export default BreadcrumbItem;