import { ReactElement } from "react";

export const CopyFooter = (): ReactElement => {
  return (
    <div className="bg-primary-10 p-6 text-center text-xs border-t">
      <span>
        &copy; HP Capital {new Date().getFullYear()} - Todos os direitos
        reservados
      </span>
    </div>
  );
};
