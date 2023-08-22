import {React} from 'react';
import Links from './Links'

const Home = ({ linkdata, box}) => {

  return (
    <>
    {console.log(linkdata.linksData)}
      {
        
        linkdata.linksData.map((link,index) => (
          <Links link={link} box={box}/>
        ))
      }
    </>
    
  )
}

export default Home;