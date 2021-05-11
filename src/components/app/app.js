import Header from '../header';
import Promo from '../promo';

import './app.scss';

function App() {
  const promoContent = [
    {
      imgName: 'bag',
      title: 'Новая коллекция', 
    },
    {
      imgName: 'bag',
      title: 'Старая коллекция', 
    },
    {
      imgName: 'bag',
      title: 'Еще одна коллекция', 
    },
    
  ];
  return (
    <div className="symbol">
      <Header />
      <Promo 
        contentData={promoContent}
      />
    </div>
  );
}

export default App;
