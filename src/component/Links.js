import {React, useState} from 'react';
import {useMediaQuery} from './hook';
import * as Icon from 'react-bootstrap-icons';

const Links = ({link,box}) => {

    const [shown, setShown] = useState(false)
    const isRowBased = useMediaQuery('(min-width: 500px)');
    const mystyle = {
        container: isRowBased => ({
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
          margin: '10px auto 0px auto',
          width: isRowBased ? '50%' : '90%',
          borderRadius: '5px',
          backgroundColor: box.bgColor,
          fontFamily: box.fontFamily,
          fontSize:box.fontSize,
          color:box.fontColor,
          alignItems: 'center',
        })
      };

  return (
    <div>
        <div style={mystyle.container(isRowBased)}>
            <div style={{marginInline:'10px'}}>
                <img src={link.logoURL} alt='logo' style={{height:'20px', width:'20px'}}/>
            </div>
            <div>{link.linktype === 'Normal Link' ? <a href={link.link} target='_blank' rel='noopener noreferrer' style={{textDecoration:'none', color:box.fontColor}}>{link.description}</a> : link.description}</div>
            <div style={{marginInline:'10px'}}>
                {link.linktype === 'Normal Link' ? "" : <button onClick={() => setShown(!shown)} style={{border:'none',backgroundColor:'transparent'}}>{shown ? <Icon.ChevronUp size={16}/> : <Icon.ChevronDown size={16}/>}</button>}
            </div>        
        </div>
        {shown ? <Renderlink link={link} /> : null}
    </div>
  )
}

const Renderlink = (props) => {

    const isRowBased = useMediaQuery('(min-width: 500px)');
    const mystyle = {
        linksStyle: isRowBased => ({
          display: 'flex',
          justifyContent: 'center',
          padding: '10px',
          margin: '-2px auto 0px auto',
          width: isRowBased ? '50%' : '90%',
          backgroundColor: 'FloralWhite',
        })
      };

    if ( props.link.linktype === "Drive Video" || props.link.linktype === "Youtube Video" ) {
      return (
        <>
            <div style={mystyle.linksStyle(isRowBased)}>
                <iframe
                    src={props.link.link}
                    title="Drive Video"
                    allowFullScreen
                    height="300px"
                    width= '100%'
                    style={{ objectFit: "contain" }}
                />
            </div>
        </>
      );
    } else if ( props.link.linktype === "Normal Image Link" || props.link.linktype === "Drive Image Link" ) {
      return (
        <>
            <div style={mystyle.linksStyle(isRowBased)}>
            <img
                src={props.link.link}
                style={{ height: "300px", width: "100%", objectFit: "contain" }}
                alt='images'
            />
            </div>
        </>
      );
    }
  };

export default Links
