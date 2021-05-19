import Header from '../header';
import Main from '../pages/main';
import Footer from '../footer';
import PageNotFound from '../pages/page-not-found';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
    <Router>
      <Header 
        layout={layout}
      />
      <div className='content'>
        <Switch>
          <Route exact path='/'>
            <Main 
              layout={layout}
            />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
