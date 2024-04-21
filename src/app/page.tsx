import Image from "next/image";
import Todo from "../components/MyTodo";
import SignUp from "../components/SignupForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#090635]">
      <div className="z-10 max-w-lg items-center justify-between font-mono text-sm lg:flex">
        <SignUp />
      </div>
    </main>
  );
}
