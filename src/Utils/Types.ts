import React from "react"

type ProductType = {
  id: string,
  code: string,
  category: number,
  title: string,
  image: any,
  price: number,
  off?: number,
  size: ClothesSizeType[],
  color: ClothesColorType[],
}

type GroupType = {
  id: number,
  title: string,
  subGroup?: { id: number, title: string }[]
}

type ProductComponentType = {
  filter: string,
  showFilter: boolean,
  showPagination: boolean,
}

type SubMenuType = { id: number, title: string, item: { id: number, title: string, href: string }[] }

type MainMenuType = {
  id: number,
  title: string,
  submenus?: SubMenuType[],
  href: string,
}

type Route = {
  path: string,
  element: React.JSX.Element,
}

type SearchItemProps = {
  id: number,
  code: string,
  title: string,
  price: number,
}

type FavoriteType = {
  id?: string,
  customerId: string,
  product: ProductType,
}

type ButtonType = {
  text: string | React.JSX.Element,
  startIcon?: any,
  size: 'small' | 'medium' | 'large',
  clickHandler: () => void,
  disabled?: boolean,
  className: string,
  classStyle?: 'button-main' | 'button-second' | 'button-text',
}

type ProductCardProp = {
  id: string,
  image: any,
  title: string,
  code: string,
  size?: ClothesSizeType,
  color?: ClothesColorType,
  price: number,
  off?: number,
  count?: number,
  showType?: 'row' | 'col' | 'row-basket' | 'col-basket' | 'col-search'
}

type ArticleType = {
  id: number,
  title: string,
  image: any,
  context: string,
  createDate: string,
  studyTime: string,
}

type ArticleProp = {
  filter: string,
  showFilter?: boolean,
  showPagination: boolean,
}

type ArticleCardProp = {
  id: number,
  image: any,
  title: string,
  context: string,
}

type ClothesSizeType = { id: number, title: string }
type ClothesColorType = { id: number, title: string }
type SortType = { id: number, value: string, title: string }

type PaginationType = {
  pageCount: number,
  currentPage: number,
  pageNoHandler: (pageNo: number) => void,
  justifyContent?: string,
  next?: boolean,
  previous?: boolean,
  first?: boolean,
  last?: boolean,
}

type ProductFilterProp = {
  handleChangeSort: (value: string) => void,
  handleChangeSearch: (value: string) => void,
  handleChangeSize: (value: number[]) => void,
  handleChangeColor: (value: string) => void,
  handlePriceRanges: (value: number[]) => void,
}

type BorderOneProp = {
  title?: string,
  className?: string,
  children: React.ReactNode,
}

type DrawerBoxProp = {
  show: boolean,
  closeDrawer: () => void
  openDrawer: () => void
  side: 'top' | 'left' | 'bottom' | 'right',
  children: React.ReactNode,
}

type FooterLinkProp = {
  title: string,
  children: React.ReactNode,
}

type FooterBoxProp = {
  title: string,
  svgIcon: any,
}

type IconTextProp = {
  icon: any,
  text: string,
  textSize: string,
  textColor?: string,
}

type BasketType = {
  id?: string,
  customerId: string
  code: string,
  image: any;
  title: string,
  price: number,
  count: number,
  size: ClothesSizeType,
  color: ClothesColorType,
  off?: number,
}

type BasketCardProp = {
  id: number,
  code: string,
  image: any;
  title: string,
  price: number,
  count: number,
  size: ClothesSizeType,
  color: ClothesColorType,
  showType: 'row' | 'col'
}

type CounterProp = {
  value: number,
  minValue?: number,
  maxValue?: number,
  className?: string,
  getValue: (currentValue: number) => void
}

type BadgeButtonProp = {
  size: 'small' | 'medium' | 'large',
  badgeContent: number,
  badgeColor: string,
  icon: React.JSX.Element,
  title?: string
  className?: string,
  clickHandler: () => void,
}

type CommentType = {
  id: number,
  body: string,
  creator: string,
  email: string,
  answers: CommentAnswerType,
}

type CommentAnswerType = {
  id: number,
  body: string,
  creator: string,
}

type SocialNetworkProp = {
  iconSize: 'small' | 'medium' | 'large',
  iconColor: string,
}

type SnackProp = {
  context: string,
  severity: 'error' | 'info' | 'success' | 'warning',
  show: boolean,
  handleCloseSnack: () => void,
}

type ImageType = {
  id: number,
  idProduct: number,
  image: string,
}

type userInfoType = {
  id: string,
  firstName: string,
  lastName: string,
  province?: string,
  city?: string,
  address?: string,
  phone: string,
  postCode?: string,
  email?: string,
  ePhone?: string,
  description?: string,
}

type loginType = {
  isLogin: boolean,
  token: string;
  userInfo?: userInfoType,
}

type OrderType = {
  id: number,
  orderCode: string,
  status: 'تحویل شده' | 'جاری',
  orderDate: string,
  price: number,
  off?: number,
}

type CategoryType = {
  id: number,
  title: string,
  image: string,
  href: string,
}

type SeveritySnack = "error" | "info" | "success" | "warning";

export type {
  ProductType, GroupType, MainMenuType, SubMenuType, Route, SearchItemProps, ButtonType, ProductCardProp,
  ClothesColorType, ClothesSizeType, SortType, ProductComponentType, PaginationType, ProductFilterProp,
  BorderOneProp, ArticleCardProp, FooterBoxProp, FooterLinkProp, IconTextProp, ArticleProp,
  ArticleType, DrawerBoxProp, BasketType, CounterProp, BadgeButtonProp, CommentType, SocialNetworkProp,
  BasketCardProp, SnackProp, ImageType, FavoriteType, userInfoType, loginType, OrderType, CategoryType,
  SeveritySnack
}