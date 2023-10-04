import { Container } from "../../components/Container";
import { Store } from "../../components/Store";

import * as Styles from "./styles";

export const Stores = () => {
  return (
    <Container>
      <Styles.StoresList>
        <Store
          name="Pastel do Lekao"
          whatsapp="139132983"
          instagram="@pastel.lekao"
          isOpen={true}
        />
        <Store
          name="Texas Burguer"
          whatsapp="1123113223123"
          instagram="@texas.burger"
          isOpen={false}
        />
      </Styles.StoresList>
    </Container>
  );
};
