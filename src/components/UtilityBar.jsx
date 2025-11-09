import '../styles/UtilityBar.css'
import DigitalComics from '../assets/buy-comics-digital-comics.png'
import Merchandise from '../assets/buy-comics-merchandise.png'
import Locator from '../assets/buy-comics-shop-locator.png'
import Subs from '../assets/buy-comics-subscriptions.png'
import Visa from '../assets/buy-dc-power-visa.svg'

const UtilityBar = () => {
    const utilities = [
        { text: "DIGITAL COMICS", icon: DigitalComics },
        { text: "DC MERCHANDISE", icon: Merchandise },
        { text: "SUBSCRIPTION", icon: Subs },
        { text: "COMIC SHOP LOCATOR", icon: Locator },
        { text: "DC POWER VISA", icon: Visa },
    ];

    return (
        <div className="utility-bar-wrapper">
            {
                utilities.map((item, index) => (
                    <div key={index} className="utility-item">
                        <img src={item.icon} alt={item.text} className='utility-icon' />
                        <p>{item.text}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default UtilityBar;