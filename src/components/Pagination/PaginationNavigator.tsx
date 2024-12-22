import { useContext } from "react";
import { PaginationContext } from "./index";

const PaginationNavigator = () => {
    const {currentPage, handleNext, handlePrev, totalPages} = useContext(PaginationContext);

    return(
        <div>
            <button onClick={handlePrev} disabled={currentPage === 1}>prev</button>
            <button onClick={handleNext} disabled={currentPage === totalPages}>next</button>
        </div>
    )
}

export default PaginationNavigator;