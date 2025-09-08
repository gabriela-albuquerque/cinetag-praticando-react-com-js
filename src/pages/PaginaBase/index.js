import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";
import styles from './PaginaBase.module.css';

function PaginaBase() {
  return (
    <main className={styles.container}>
      <Cabecalho />
      <FavoritosProvider>
        <div className={styles.contentContainer}>
          <Container>
            <Outlet />
          </Container>
        </div>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
}

export default PaginaBase;
