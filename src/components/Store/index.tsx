import * as Styles from "./styles";

interface IStore {
  name: string;
  isOpen: boolean;
  whatsapp: string;
  instagram: string;
}

export const Store = ({ name, isOpen, whatsapp, instagram }: IStore) => {
  const statusText = isOpen ? "Aberto" : "Fechado";

  return (
    <Styles.Store>
      <div>
        <Styles.Image src="hamburgueria.jpg" />
      </div>
      <Styles.Informations>
        <Styles.Name>{name}</Styles.Name>
        <Styles.StatusWrapper>
          <Styles.Status isOpen={isOpen} />
          {statusText}
        </Styles.StatusWrapper>
        <Styles.H2>Whatsapp: {whatsapp} </Styles.H2>
        <Styles.H2>Instagram: {instagram}</Styles.H2>
      </Styles.Informations>
    </Styles.Store>
  );
};
