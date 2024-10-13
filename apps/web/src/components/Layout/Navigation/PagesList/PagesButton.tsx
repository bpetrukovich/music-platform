import React from "react";
import { IconType } from "react-icons";

export default function PagesButton({
  Icon,
  pageName,
}: {
  Icon: IconType;
  pageName: string;
}) {
  return (
    <li className="flex h-11 items-center gap-5 px-4 hover:text-text transition">
      <div className="text-2xl">
        <Icon />
      </div>
      {pageName}
    </li>
  );
}
