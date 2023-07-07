import { Button } from "./button";

export function Input() {
  return (
    <div className="flex items-center justify-center">
      <form className="flex">
        <input className="font-mono mt-10 h-8 w-60 rounded-md drop-shadow-md place-content-center" type="name" placeholder="Task" />
        <Button />
      </form>
    </div>
  );
}
