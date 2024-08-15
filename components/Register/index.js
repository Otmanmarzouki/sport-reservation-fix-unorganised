import { useState } from "react";
import FormInput from "./FormInput";
import LoginButton from "./LoginButton";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <form className="form-horizontal w-3/4 mx-auto">
      <FormInput label="Name" type="name" value={name} onChange={(e) => setName(e.target.value)} />
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
      <LoginButton name={name} email={email} password={password} />
    </form>
  );
}
