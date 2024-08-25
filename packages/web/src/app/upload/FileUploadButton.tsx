import React from "react";
import cn from "classnames";

export default function FileUploadButton({
  error,
  touched,
  fileName,
}: {
  fileName: string;
  error?: string;
  touched?: boolean;
}) {
  return (
    <button
      type="button"
      className={cn(
        "w-full flex justify-center items-center h-16 rounded-lg",
        "text-xl text-text bg-transparent-lighter font-bold",
        "hover:bg-background hover:text-text-dim transition",
        {
          "border-error border-2": error && touched,
        },
      )}
    >
      {error && touched ? error : fileName}
    </button>
  );
}
