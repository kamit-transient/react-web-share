import React from "react";

import { SocialIconsProps } from "../interfaces";
import { CloseButton } from "./close";
import { Header } from "./header";
import Icon from "./icon";

export const SocialIconsUnstyled = ({
  onClose,
  sites,
  data,
  closeText,
  onClick,
  header,
  className
}: SocialIconsProps) => (
  <section
    role="dialog"
    aria-modal="true"
    className={` ${className}`}
  >
    {sites.map((name) => (
      <Icon
        name={name}
        key={name}
        data={data}
        onClose={onClose}
        onClick={onClick}
      />
    ))}


  </section>
);
