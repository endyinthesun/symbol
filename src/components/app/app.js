import Main from '../pages/main';
import Header from '../header';

import { layoutGenerator } from 'react-break';

import './app.scss';

function App() {
  
  const layout = layoutGenerator({
    mobile: 375,
    tablet: 768,
    desktop: 1280,
    bigDesktop: 1600,
  });
  return (
    <>
      <Header 
        layout={layout}
      />
      <div className='content'>
        <Main 
          layout={layout}
        />
      </div>
    </>
  );
}

export default App;
