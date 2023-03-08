import DarkLightModeButton from './components/DarkLightMode';
import IntroAndTools from './pages/IntroAndTools';
import AppContext from './context/AppContext';
import { AppContainer, DarkOverlay } from './styles/styled-components'
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
      {/* <Loader /> */}
      <AppContainer>
        <DarkLightModeButton />
        <IntroAndTools />
        <DarkOverlay className={darkMode && 'dark-mode'} />
      </AppContainer>
    </AppContext.Provider>
  )
}

export default App;
