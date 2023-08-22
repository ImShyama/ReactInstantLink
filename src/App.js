import './App.css';
import Home from './component/home';
import Header from './component/header';
import Footer from './component/footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
const URL = "https://script.google.com/macros/s/AKfycbyKpVhShe8dwbdz72hWjMnahGRqSVqhxpInGf_mliCced8PhVUjM4ta_2Q5F4IVfqQuvQ/exec";
// const URL = "https://script.google.com/macros/s/AKfycby0coFdkup_lZu0-OmrwhO5OtyGs2EFWgIg0SG9tFLxtdNY3tcgi2QbApXGi5k2Zjcikg/exec";


function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [settingsData, setSettingsData] = useState(null);
  
  // using Async Await
  const getMyData = async () => {
    try {
      const res = await axios.get(URL);
      setMyData(res.data);
      setSettingsData({
        "headerImg": res.data.settingData.mainBody.logoImage,
        "bgImg": res.data.settingData.mainBody.backgroundImage,
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
    console.log(myData)
    console.log(settingsData)
  }, [])

  return (
    <div style={settingsData !== null ? { backgroundImage: `url(${myData.settingData.mainBody.backgroundImage})`, minHeight:'100vh' } : {}}>
      {isError !== "" && <h1>isError</h1>}
      {
        settingsData !== null &&
        <Header
          header={settingsData}
        />
      }

      {
        settingsData !== null &&
        <Home
          linkdata={myData.linksData}
          box={myData.settingData.box}
          searchBox ={myData.settingData.mainBody.search}
        />
        // myData.linksData.filter((item)=>{
        //   return search.toLocaleLowerCase() ===""
        //   ? item
        //   : item.description.toLocaleLowerCase().includes(search);
        // })
        // .map((link) => (
        //   <Links link={link} box={myData.settingData.box}/>
        // ))
      }
      
      {
        settingsData !== null &&
        <Footer footer={myData.settingData.footer} />
      }

    </div>
  );

  
}

export default App;
