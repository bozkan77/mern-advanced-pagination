import "./pg.css";

const Pagination = ({ page, pages, changePage }) => {
  let middlePagination;

  if (pages <= 5) {
    middlePagination = [...Array(pages)].map((_, i) => (
      <button
        key={i + 1}
        onClick={() => changePage(i + 1)}
        disabled={page === i + 1}
      >
        {i + 1}
      </button>
    ));
  } else {
    const startValue = Math.floor((page - 1) / 5) * 5;

    middlePagination = (
      <>
        {[...Array(5)].map((_, i) => (
            <button
              key={startValue + i + 1}
              disabled={page === startValue + i + 1}
              onClick={() => changePage(startValue + i + 1)}
            >
              {startValue + i + 1}
            </button>
          ))
        }
        <button>...</button>
        <button onClick={() => changePage(pages)}>{pages}</button>
      </>
    );

    if( page > 5) {
      if(pages - page >= 5){
        middlePagination= (
          <>
          <button onClick={()=> changePage(1)}>1</button>
          <button>...</button>
          <button onClick={()=> changePage(startValue)}>{startValue}</button>
          {
            [...Array(5)].map((_, i)=> (
              <button
                key={startValue + i + 1}
                disabled={page === startValue + i + 1 }
                onClick={()=> changePage(startValue + i + 1)}
              >
                {startValue + i + 1}
              </button>
            ))
          }

          <button>...</button>
          <button onClick={()=> changePage(pages)}>{pages}</button>
          </>
        )
      } else {
        let amountLeft = pages - page + 5
        middlePagination = (
          <>
          <button onClick={()=> changePage(1)}>1</button>
          <button>...</button>
          <button onClick={()=> changePage(startValue)}>{startValue}</button>
          {
            [...Array(amountLeft)].map((_, i)=> (
              <button
                key={startValue + i + 1}
                style={pages < startValue + i + 1 ? {display: "none"} : null}
                disabled={page === startValue + i + 1 }
                onClick={()=> changePage(startValue + i + 1)}
              >
                {startValue + i + 1}
              </button>
            ))
          }
          </>
        )
      }
    }
  }

  return (
    pages > 1 && (
      <div className="pagination">
        <button
          className="pagination__prev"
          onClick={() => changePage((page) => page - 1)}
          disabled={page === 1}
        >
          &#171;
        </button>
        {middlePagination}
        <button
          className="pagination__next"
          onClick={() => changePage((page) => page + 1)}
          disabled={page === pages}
        >
          &#187;
        </button>
      </div>
    )
  );
};

export default Pagination;
