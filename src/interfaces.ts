import { ReactNode } from "react";

export interface ShareData {
  text?: string;
  title?: string;
  url?: string;
}

export interface RWebShareProps {
  children: any;
  closeText?: string;
  data: ShareData;
  sites?: string[];
  onClick?;
  disableNative?;
  header?: ReactNode | undefined;
  className?: string;
  iconsClassName?: string;

}

export interface SocialIconsProps {
  onClose;
  closeText?: string;
  sites: string[];
  data: Required<ShareData>;
  onClick?;
  header?: ReactNode | undefined;
  className?: string
}

export interface IconProps {
  onClose;
  name: string;
  data: Required<ShareData>;
  onClick?;
}

export interface IconItem {
  path: JSX.Element;
  e;
  color: string;
  viewBox?: string;
}
