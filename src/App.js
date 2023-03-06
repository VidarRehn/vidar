import DarkLightMode from './components/DarkLightMode';
import Tools from './components/Tools';
import AppContext from './context/AppContext';
import { AppContainer, Title, Intro, DarkOverlay } from './styles/styled-components'
import { useState } from 'react'

function App() {

  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <AppContext.Provider value={{darkMode, setDarkMode}}>
    <AppContainer>
      <DarkLightMode />
      <Title>hi, I'm vidar.</Title>
      <Intro>a web developer. below is my toolbox</Intro>
      <Tools />
      <DarkOverlay className={darkMode && 'dark-mode'} />
    </AppContainer>
    </AppContext.Provider>
  )
}

export default App;
