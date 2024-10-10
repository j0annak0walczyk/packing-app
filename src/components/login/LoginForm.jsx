import { useState } from "react";
import styles from "./LoginForm.module.css";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className={styles.container}>
      <p className={styles.noMailInfo}>
        No need to flex your typing skills! Just hit &quot;Log in&quot; and
        enjoy the demo. No password required. 😉
      </p>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/app/choose-trip">
        <Button
          style={{
            marginTop: "1rem",
            padding: "1rem",
          }}
        >
          Log in
        </Button>
      </Link>
    </form>
  );
}

export default LoginForm;
