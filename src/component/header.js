import  {React} from 'react'

const Header = (props) => {

    return (
        <>
            {/* {console.log(props)} */}
            <div className='div-center' id='head'>
                <div>
                    <img className="headerImg" src={props.header.headerImg} alt='logo'/>
                </div>
                <div className="headertext" style={{
                    fontFamily: props.header.headerFontSize,
                    color: props.header.headerColor
                }}>
                    <h2 >{props.header.headerTxt}</h2>
                </div>
            </div>
        </>
    )
}

export default Header
