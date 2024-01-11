import * as S from "./headerStylesMenu"

const Menu = () => {
    return <S.MenuList> 
        <S.itemList>
             <a href="#">Recursos</a>
         </S.itemList>
         <S.itemList>
             <a href="#">Preços</a>
         </S.itemList>
         <S.itemList>
             <a href="#">Carreiras</a>
         </S.itemList>
         <S.itemList>
             <a href="#">Ajuda</a>
         </S.itemList>
     
    </S.MenuList>
};

export default Menu;