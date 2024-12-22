import { useContext } from "react";
import { PaginationContext } from "./index";


const PaginationPageButton = () => {
    const { setCurrentPage, currentPage, startPage, endPage} = useContext(PaginationContext);
    const pageButtons =[];

    for(let button = startPage; button <= endPage; button++ ) { // 총 페이지 수 만큼 버튼생성성
        pageButtons.push(
            <button key={button} onClick={() => setCurrentPage(button)} disabled={currentPage === button} >
                {button}
            </button> 
        )
    }
    return(
        <div>
            {pageButtons}
        </div> 
    )
}

export default PaginationPageButton;