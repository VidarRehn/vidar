import DarkLightModeButton from './components/DarkLightMode';
import ColorChanger from './components/ColorChanger'
import Tools from './components/Tools';
import AppContext from './context/AppContext';
import { AppContainer, Title, Intro, SeeMoreButton, DarkOverlay } from './styles/styled-components'
import { useState, useEffect } from 'react'
import Loader from './components/Loader';

function App() {

  const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let theme = localStorage.getItem('theme')
    if (theme === 'dark'){
      setDarkMode(true)
    } else if (theme === 'light') {
      setDarkMode(false)
    }
  }, [])
  
  return (
    <AppContext.Provider value={{darkMode, setDarkMode, loading, setLoading}}>
      <Loader />
      <AppContainer>
        <DarkLightModeButton />
        {/* <ColorChanger /> */}
        <Title>hi, I'm vidar.</Title>
        <Intro>a web developer & designer. below is my evergrowing toolbox.</Intro>
        <Tools />
        {/* <SeeMoreButton>see more</SeeMoreButton> */}
        <DarkOverlay className={darkMode && 'dark-mode'} />
      </AppContainer>
    </AppContext.Provider>
  )
}

export default App;
