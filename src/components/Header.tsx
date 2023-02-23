import styles from "./header.module.css";
// 

type HeaderProps = {
  query: string;
  setQuery: (query: string) => void;
};

const Header = ({ query, setQuery }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <input
        className={styles.input}
        value={query}
        placeholder="Busca un Pokemon 😺"
        onChange={(event) => setQuery(event.target.value.trim())}
        type="text"
      />
    </header>
  );
};

export default Header;
