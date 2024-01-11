import { Cabecalho } from "./headerStyles";

import * as S from './headerStyles';

import Logo from "../molecules/headerLogo";
import Menu from "../molecules/headerMenu";
import ButtonStore from "../molecules/headerButton";


const Header = () => {
    return <S.Cabecalho>
        
        <Logo />
        <Menu />
        <ButtonStore />
        
        </S.Cabecalho>
}

export default Header;
