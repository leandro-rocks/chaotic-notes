import { Task } from "@customTypes/task";
import { Input } from "./styles";
import { useEffect, useRef } from "react";

type CheckboxExtraProps = {
  status: Task["status"];
};

const Checkbox = ({
  status,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & CheckboxExtraProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current!.checked = false;
    ref.current!.indeterminate = false;

    switch (status) {
      case "TO-DO":
        ref.current!.checked = false;
        break;
      case "FINISHED":
        ref.current!.checked = true;
        break;
      case "INITIATED":
        ref.current!.checked = false;
        ref.current!.indeterminate = true;
        break;
      default:
        break;
    }
  }, [status]);

  return <Input ref={ref} {...props} />;
};

export default Checkbox;
