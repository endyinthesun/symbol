import Header from '../header';
import Main from '../pages/main';
import Footer from '../footer';

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
      <Footer />
    </>
  );
}

export default App;
