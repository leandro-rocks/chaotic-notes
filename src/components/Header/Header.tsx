import Logo from "@components/Logo";
import { Container } from "./styles";
import DateSelector from "@components/DateSelector";

const Header = () => (
  <Container>
    <Logo />
    <DateSelector />
  </Container>
);

export default Header;
