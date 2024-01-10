import { Cabecalho } from "./headerStyles";

import * as S from './headerStyles';
import Logo from "../molecules/headerLogo";
import Menu from "../molecules/headerMenu";

const Header = () => {
    return <S.Cabecalho>
        <Logo />
        <Menu />
        <Button />
        
        </S.Cabecalho>
}

export default Header;