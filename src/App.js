import './App.css';
import Page from './Containers/Page';
import EasySort from './Components/EasySort';
import TopBar from './Components/TopBar';
import GridCarousel from './Components/GridCarousel';
import { ThemeContext, themes } from './Utilities/Theme/themes';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(themes.light);

  const changeTheme = (toTheme) => {
    setTheme(themes[toTheme]);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <TopBar changeTheme={changeTheme}/>
        <Page>
          <EasySort />
          <GridCarousel />
        </Page>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
