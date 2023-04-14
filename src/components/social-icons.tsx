import React from "react";

import { SocialIconsProps } from "../interfaces";
import { CloseButton } from "./close";
import { Header } from "./header";
import Icon from "./icon";

export const SocialIcons = ({
  onClose,
  sites,
  data,
  closeText,
  onClick,
  header
}: SocialIconsProps) => (
  <section
    role="dialog"
    aria-modal="true"
    className="rws-container web-share-fade-in-up"
  >
    {
      header ? header : (
        <Header title={data.title} ></Header>
      )
    }
    <div className="rws-icons">
      {sites.map((name) => (
        <Icon
          name={name}
          key={name}
          data={data}
          onClose={onClose}
          onClick={onClick}
        />
      ))}
    </div>
    <CloseButton onClose={onClose} closeText={closeText} />
  </section>
);
