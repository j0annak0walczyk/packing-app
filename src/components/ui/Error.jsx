/* eslint-disable react/prop-types */
import styles from "./Error.module.css";
import Button from "./Button";

// const Box = styled.div`
//   /* Box */
//   background-color: var(--color-grey-0);
//   border: 1px solid var(--color-grey-100);
//   border-radius: var(--border-radius-md);

//   padding: 4.8rem;
//   flex: 0 1 96rem;
//   text-align: center;

//   & h1 {
//     margin-bottom: 1.6rem;
//   }

//   & p {
//     font-family: "Sono";
//     margin-bottom: 3.2rem;
//     color: var(--color-grey-500);
//   }
// `;

function Error({ error, resetErrorBoundary }) {
  return (
    <div className={styles.container}>
      <h1>Something went wrong 🧐</h1>
      <p>{error.message}</p>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
}

export default Error;
