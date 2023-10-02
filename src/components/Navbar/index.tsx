import * as Styles from "./styles";

export const NavBar = () => {
  const onClickAction = () => {
    alert("Ola");
  };

  return (
    <Styles.Navbar>
      <Styles.Logo>Logo</Styles.Logo>
      <Styles.Button onClick={onClickAction}>
        Cadastre sua empresa
      </Styles.Button>
    </Styles.Navbar>
  );
};
