import './App.css';
import Home from './component/home';
import Header from './component/header';
import Footer from './component/footer';
import Links from './component/Links';
import { useEffect, useState } from 'react';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import axios from 'axios';
const URL = "https://script.google.com/macros/s/AKfycby0coFdkup_lZu0-OmrwhO5OtyGs2EFWgIg0SG9tFLxtdNY3tcgi2QbApXGi5k2Zjcikg/exec";

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [settingsData, setSettingsData] = useState(null);
  const [search, setSearch] = useState("");

  // using Async Await
  const getMyData = async () => {
    try {
      const res = await axios.get(URL);
      setMyData(res.data);
      setSettingsData({
        "headerImg": res.data.settingData.mainBody.logoImage,
        "headerTxt": res.data.settingData.heading.text,
        "headerColor": res.data.settingData.heading.color,
        "headerFontSize": res.data.settingData.heading.fontSize
      });
    } catch (error) {
      setIsError(error.message);
    }
  }

  useEffect(() => {
    getMyData();
  }, [])

  const customStyles = {
    padding: '10px',
    margin: '10px',
    borderRadius: '8px',
    width: '30%',
    border: 'none',
    cursor: 'pointer'
  };

  return (

    <div style={settingsData !== null ? { backgroundImage: 'url("https://i.ibb.co/Bwn7Mdm/dylan-nolte-SH-Ijr-Kw-G8c-unsplash.jpg")', minHeight:'100vh' } : {}}>
      {isError !== "" && <h1>isError</h1>}
      {
        settingsData !== null &&
        <Header
          header={settingsData}
        />
      }
      <div style={{ textAlign: "center" }}>
        <input type="search" onChange={(e) => setSearch(e.target.value)} style={customStyles} id="gsearch" name="gsearch" placeholder='Search' />
      </div>

      {
        settingsData !== null &&
        // <Home
        //   linkdata={myData}
        //   box={myData.settingData.box}
        // />
        myData.linksData.filter((item)=>{
          return search.toLocaleLowerCase() ===""
          ? item
          : item.description.toLocaleLowerCase().includes(search);
        })
        .map((link) => (
          <Links link={link} box={myData.settingData.box}/>
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
        <Button
          variant="outlined"
        // onClick={handlePrevPage}
        // disabled={currentPage === 0}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
        // onClick={handleNextPage}
        // disabled={currentPage === totalPages - 1}
        >
          Next
        </Button>
      </div>
      {
        settingsData !== null &&
        <Footer footer={myData.settingData.footer} />
      }

    </div>
  );
}

export default App;
