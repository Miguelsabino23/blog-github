import { HeaderContainer } from "./styles";
import cover from "../../assets/svg/cover.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={cover} alt='imagem de fundo' />
    </HeaderContainer>
  );
}
