import "./style.css";

import React, { cloneElement, memo, useCallback, useMemo } from "react";

import { Backdrop } from "./components/backdrop";
import { IconList } from "./components/icon/list";
import { Portal } from "./components/portal";
import { SocialIconsUnstyled } from "./components/social-icons-unstyled";
import { useDisclosure } from "./hooks/use-disclosure";
import type { RWebShareProps } from "./interfaces";

const defaultSites = Object.keys(IconList).slice(0, 8);

export const RWebShareUnStyled = memo((props: RWebShareProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const shareData = useMemo(
    () => ({
      ...props.data,

      title: props.data.title || "share",
      text: props.data.text || "",
      url:
        props.data.url ||
        (typeof window !== "undefined" && window.location.href) ||
        "",
    }),
    [props.data]
  );

  const handleOnClick = useCallback(async () => {
    if (window.navigator.share && !props.disableNative) {
      try {
        await window.navigator.share(shareData);
        props.onClick();
      } catch (e) {
        console.warn(e);
      }
    } else {
      onOpen();
    }
  }, [shareData]);
  let containerClass = props.className;
  let iconsClassName = props.iconsClassName;
  return (
    < div className={containerClass}>
      {/* Overrides Children element's `onClick` event */}
      {cloneElement(props.children, {
        ...props.children?.props,

        onClick: handleOnClick,
      })}

      {/* Share Component */}

      <SocialIconsUnstyled
        className={iconsClassName}
        onClose={onClose}
        sites={props.sites || defaultSites}
        data={shareData}
        closeText={props.closeText}
        onClick={props.onClick}
        header={props.header}
      />

    </>
  );
});
