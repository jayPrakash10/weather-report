import React, { useContext } from 'react'
import { ThemeContext} from './theme'

const Header = (props)=>{
    let th = useContext(ThemeContext);
    return(
        <>
            <nav className={th.navtheme}>
                <div className="container-fluid myNav" id='mynav' style={{justifyContent:'flex-end'}}>
                    <div className='switch'><div  className={th.swiththeme} onClick={props.changeTheme}></div></div>
                </div>
            </nav>
        </>
    )
}

export default Header