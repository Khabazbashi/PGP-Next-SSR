import Search from "./Search";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar({ search }) {
  return (
    <div className={styles.container}>
      <Link href="/products">
        <p className={styles.title}>
          <span className={styles.titleSpan}>Fake</span>Store
        </p>
      </Link>
      <Search search={search} />
    </div>
  );
}