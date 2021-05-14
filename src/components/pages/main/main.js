import Promo from '../../promo';
import Advantages from '../../advantages';
import Brands from '../../brands';

function Main({layout}) {
  const promoContent = [
    {
      imgName: 'bag',
      title: 'Новая коллекция', 
      id: 1
    },
    {
      imgName: 'bag',
      title: 'Старая коллекция', 
      id: 2
    },
    {
      imgName: 'bag',
      title: 'Еще одна коллекция', 
      id: 3
    },

  ];
  
  return (
    < >
      <Promo 
        contentData={promoContent}
        layout={layout}
      />
      <Advantages />
      <Brands 
        layout={layout}
      />
    </>
  );
}

export default Main;