import React from 'react'

const Footer = ({footer}) => {
  const customStyles = {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '50px',   /* Height of the footer */
    background: '#fff',
    marginTop: '10px'
  };

  return (
    <div className='div-center' style={customStyles}>
      <ul >
        {console.log(footer.icons)}
        {Object.keys(footer.icons).map((key, index) => (
          <li style={{display: 'inline-block', marginInline: '10px'}} >
            <a href={footer.icons[key]['imgLink']}><img src={footer.icons[key]['imgUrl']} style={{height:'25px',width:'25px'}}/></a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer
