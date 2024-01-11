
import Frontend from "../templates/Frontend";
import * as S from "../pages/mainStyles";
import ButtonComecar from "../atoms/buttonComecar";

function Main() {
    return (
    <Frontend>
        <S.Container>
           <div>
            <h1> A maneira mais fácil de gerenciar projetos </h1>
            <h6> Desde as pequenas coisas até a visão geral, organiza o trabalho para que as equipes saibam o que fazer, por que é importante e como concluí-lo.</h6>
            <ButtonComecar> </ButtonComecar>
           </div>
           <div> Coluna 2 </div>
        </S.Container>
    </Frontend>
    );
}

export default Main;