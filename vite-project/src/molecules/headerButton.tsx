import * as S from "./headerStylesMenu"

import StoreImage from '../assets/Store badge.svg'
import StoreAppImage from '../assets/Store badge (1).svg'

const ButtonStore = () => {
    return <S.MenuList>
        <S.itemList>
        <img src= {StoreImage} alt="OlayStore logo Image" />
        </S.itemList>
        <img src= {StoreAppImage} alt="App Store logo image"></img>
    </S.MenuList>
     
};



export default ButtonStore;