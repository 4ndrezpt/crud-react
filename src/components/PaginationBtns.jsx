export const PaginationBtns = ({ curPage, setCurPage, totalPages})=> {

  const pageNumbers = ()=>{
    let pages = [];
    for (let i = 1; i <= totalPages; i++){
      pages.push(
        <button
          className={i==curPage? "current" : ""}
          key={"toPage"+i}
          onClick={()=>setCurPage(i)}
        >{i}</button>);
    }
    return pages;
  }
  return (
    <div className="pagination__container">
      <button
        className={curPage <= 1 ? "disabled" : ""}
        disabled={curPage <= 1}
        onClick={()=>{setCurPage(1)}}>&laquo;
      </button>
      <button
        className={curPage <= 1 ? "disabled" : ""}
        disabled={curPage <= 1}
        onClick={()=> setCurPage(curPage >= 2 ? curPage - 1 : 1)}
      >
        &lt;
      </button>
      {pageNumbers()}


      <button
        className={curPage >= totalPages ? "disabled" : ""}
        disabled={curPage >= totalPages}
        onClick={()=> setCurPage(curPage < totalPages ? curPage + 1 : totalPages)}
      >
        &gt;
      </button>
      <button
        className={curPage >= totalPages ? "disabled" : ""}
        disabled={curPage >= totalPages}
        onClick={()=>{setCurPage(totalPages)}}>
          &raquo;
      </button>
    </div>
  )
}
