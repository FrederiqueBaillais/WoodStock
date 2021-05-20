import React from 'react';
import salon from '../images/salon.png';

const Shop = () => {
    return <div className="shop">
        <div className="shop_left">
            <div className="shop_left_text">
                <h2>SHOP</h2>
                <p>Look, just because I don't be ginin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyse my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
            </div>
            <a href="#" className="buttonOneTwo">GO SHOPPING</a>
        </div>
        <div className="shop_right">
            <img className="salon_img" src={salon} alt="salon"/>
        </div>
    </div>;
};

export default Shop;