export type SubMenuItem = {
  title: string;
  desc?: string;
  link: string;
}

export type MenuItem = {
  title: string;
  link?: string;
  subMenu?: SubMenuItem[];
}