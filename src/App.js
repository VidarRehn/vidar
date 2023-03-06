import DarkLightModeButton from './components/DarkLightMode';
import ColorChanger from './components/ColorChanger'
import Tools from './components/Tools';
import AppContext from './context/AppContext';
import { AppContainer, Title, Intro, DarkOverlay } from './styles/styled-components'
import { useState, useEffect } from 'react'

function App() {

  const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)

  useEffect(() => {
    let theme = localStorage.getItem('theme')
    if (theme === 'dark'){
      setDarkMode(true)
    } else if (theme === 'light') {
      setDarkMode(false)
    }
  }, [])
  
  return (
    <AppContext.Provider value={{darkMode, setDarkMode}}>
    <AppContainer>
      <DarkLightModeButton />
      <ColorChanger />
      <Title>hi, I'm vidar.</Title>
      <Intro>a web developer. below is my toolbox</Intro>
      <Tools />
      <DarkOverlay className={darkMode && 'dark-mode'} />
    </AppContainer>
    </AppContext.Provider>
  )
}

export default App;
