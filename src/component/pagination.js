import React from 'react'

const pagination = () => {
  return (
    <>
      <div className='pagination_btn'>
        <button onClick={() => getPrevPage}>PREV</button>
        <p>
            {page} of {endPage}
        </p>
        <button onClick={() => getNextPage}>NEXT</button>
      </div>
    </>
  )
}

export default pagination
