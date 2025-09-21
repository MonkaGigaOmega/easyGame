import styles from "./FormLogReg.module.scss";
interface FormLogRegProps {
  submitFunction: (e: React.FormEvent<HTMLFormElement>) => void;
  text: string;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}
export const FormLogReg = ({ submitFunction, text, email, setEmail }: FormLogRegProps) => {
  return (
    <form onSubmit={submitFunction} className={styles.form}>
      <input value={email} onChange={e => setEmail(e.target.value)} className={styles.input} />
      <button className={styles.button} type="submit">
        {text}
      </button>
    </form>
  );
};
