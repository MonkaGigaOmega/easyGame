import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { FormLogReg } from "../FormLogReg/FormLogReg";
import styles from "./Registration.module.scss";
import { login } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
export const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const reg = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      login({
        user: { email: email },
      })
    );
    navigate("/Game");
  };
  return (
    <div className={styles.registration}>
      <p>Registration page</p>
      <FormLogReg email={email} setEmail={setEmail} text={"Click!"} submitFunction={reg} />
    </div>
  );
};
