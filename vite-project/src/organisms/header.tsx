import { Cabecalho } from "./headerStyles";

import * as S from './headerStyles';

import Logo from "../molecules/headerLogo";
import Menu from "../molecules/headerMenu";
import ButtonPlayStore from "../molecules/headerButton";


const Header = () => {
    return <S.Cabecalho>
        <Logo />
        <Menu />
        <ButtonPlayStore />
        
        </S.Cabecalho>
}

export default Header;
