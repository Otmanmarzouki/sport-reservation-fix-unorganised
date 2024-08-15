import { useState } from "react";
import FormInput from "./FormInput";
import LoginButton from "./LoginButton";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="form-horizontal w-3/4 mx-auto">
      <FormInput
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <LoginButton email={email} password={password} />
    </form>
  );
}
