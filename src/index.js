import ReactDOM from 'react-dom';

import Header from './Header';
import Body from './Body';
import MobileNav from './MobileNav';

function Site(){
    return(
        <div>
            <Header />
            <Body />
            <MobileNav />
        </div>
    )
}

const site = Site();
ReactDOM.render(site, document.querySelector(".root"));
