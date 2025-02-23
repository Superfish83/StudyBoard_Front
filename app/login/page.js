"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [input, setInput] = useState({
    id: "",
    pw: "",
  });

  function handleInputChange(field, event) {
    setInput((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // verify loginInput data
    if (input.id.length >= 4 && input.pw.length >= 8) {
      console.log("valid input");
      console.log(input);
      router.push("/");
    } else {
      alert("invalid input");
    }

    return;
  }

  return (
    <div className="m-4">
      <header className="font-bold text-xl mb-4">
        <Link href={"/"}>StudyBoard</Link>
      </header>

      <form onSubmit={handleSubmit} className="rounded-lg border-2 p-4 w-max">
        <div className="font-bold">Sign in</div>
        <section className="my-2 text-center">
          <div className="flex my-1 items-center">
            <label className="mr-2 ml-auto">ID</label>
            <input
              className="input ml-auto"
              onChange={(event) => handleInputChange("id", event)}
              value={input.id}
            />
          </div>
          <div className="flex my-1 items-center">
            <label className="mr-2 ml-auto">PW</label>
            <input
              type="password"
              className="input ml-auto"
              onChange={(event) => handleInputChange("pw", event)}
              value={input.pw}
            />
          </div>
          <button type="submit" className="button">
            Sign in
          </button>
        </section>
        <div>
          <label>{"Don't have account?"}</label>
          <Link href={"/register"} className="text-cyan-700 ml-1">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
