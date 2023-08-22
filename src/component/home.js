import {React, useState} from 'react';
import Links from './Links'
import { Button } from "@mui/material";
import { useMediaQuery } from 'react-responsive';

const Home = ({ linkdata, box, searchBox}) => {

    console.log(searchBox)
  //Search 
  const [search, setSearch] = useState("");
  const isTabletOrMobile = useMediaQuery({ 
    query: '(max-width: 1224px)' 
  })
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  const customStyles = {
    padding: '10px',
    margin: '10px',
    borderRadius: '8px',
    width: '20%',
    border: 'none',
    cursor: 'pointer'
  };
  const customStyles1 = {
    padding: '10px',
    margin: '10px',
    borderRadius: '8px',
    width: '40%',
    border: 'none',
    cursor: 'pointer'
  };

  var searchData = linkdata.filter((item)=>{
    return search.toLocaleLowerCase() ===""
    ? item
    : item.description.toLocaleLowerCase().includes(search);
  })

  //Pagination constant
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  var records = searchData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(searchData.length / recordsPerPage)
  // const numbers = [...Array(npage + 1).keys].slice(1)

  

  return (
    <>
      {(isDesktopOrLaptop && searchBox === "Yes") && <div style={{ textAlign: "right" }}>
        <input type="search" onChange={(e) => setSearch(e.target.value)} style={customStyles} id="gsearch" name="gsearch" placeholder='Search' />
      </div>}
      {(isTabletOrMobile && searchBox === "Yes") && <div style={{ textAlign: "center" }}>
        <input type="search" onChange={(e) => setSearch(e.target.value)} style={customStyles1} id="gsearch" name="gsearch" placeholder='Search' />
      </div>}

      {
        records.map((link,index) => (
          <Links link={link} box={box}/>
        ))
      }

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px auto"
        }}
        className="prev-next-container"
      >
        <Button variant="outlined" onClick={prevPage} >
          Previous
        </Button>
        <Button variant="outlined" onClick={nextPage} >
          Next
        </Button>
      </div>

    </>
  )
  function prevPage(){
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  }

  function nextPage(){
    if(currentPage !== npage){
      setCurrentPage(currentPage + 1)
    }
  }
}

export default Home;