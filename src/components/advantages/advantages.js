import React from 'react';

import './advantages.scss';

function Advantages() {
    return(
        <section className='advantages'>
            <div className="advantages_wrapper">
                <div className="free_del">
                    <div className='title'>
                        Бесплатная доставка и примерка
                    </div>
                    <div className='subtitle'>
                        В 130 примерочных JustIn и 26 магазинах сети Symbol
                    </div>
                </div>
                <div className="paypass">
                    <div className='title'>
                        Оплата APPLE и google PAY
                    </div>
                    <div className='subtitle'>
                        Быстрая и надежная оплата вашего заказа
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Advantages;