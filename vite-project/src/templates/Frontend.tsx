import * as S from './styles'

type Frontendpops = {
    children: React.ReactNode;
}

const Frontend = ({children}: Frontendpops) => {
    return <S.container>   teste front{children}  </S.container>
}

export default Frontend;