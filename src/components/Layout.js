import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
    const [isOn, setisOn] = React.useState(false);
    const toggleColor=()=>{
      setisOn(!isOn);
    }
    return (
        <div>
            <Header name={"Seth"}/>
            {children}
            <Footer color={isOn} lastName={"Zea"} toggleColor={toggleColor}/>
        </div>
    )
}

export default Layout
