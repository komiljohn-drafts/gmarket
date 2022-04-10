import {
  BookmarkSvg,
  EyeSvg,
  HeadphonesSvg,
  HeartSvg,
  HistorySvg,
  LogoutSvg,
  StoreSvg,
  UserSvg,
  WalletSvg,
} from '../../../utils/svgs'

export const menuItemsData = [
  {
    id: 1,
    isLink: false,
    icon: <StoreSvg />,
    text: 'Stores',
    order: 1,
  },
  {
    id: 2,
    isLink: false,
    icon: <HistorySvg />,
    text: 'Order history',
    order: 2,
  },
  {
    id: 3,
    isLink: false,
    icon: <BookmarkSvg />,
    text: 'Saved stores',
    order: 3,
  },
  {
    id: 4,
    isLink: false,
    icon: <HeartSvg />,
    text: 'Liked products',
    order: 4,
  },
  {
    id: 5,
    isLink: false,
    icon: <EyeSvg />,
    text: 'Viewed products',
    order: 5,
  },
  {
    id: 6,
    isLink: false,
    icon: <WalletSvg />,
    text: 'Wallet history',
    order: 6,
  },
  {
    id: 7,
    isLink: false,
    icon: <UserSvg />,
    text: 'Profile setting',
    order: 7,
  },
]

export const menuActionsData = [
  {
    id: 1,
    isLink: true,
    icon: <HeadphonesSvg />,
    text: 'Help center',
    order: 1,
  },
  {
    id: 2,
    isLink: true,
    icon: <LogoutSvg />,
    text: 'Logout',
    order: 2,
  },
]
