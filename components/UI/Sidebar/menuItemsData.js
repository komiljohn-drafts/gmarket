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
  },
  {
    id: 2,
    isLink: false,
    icon: <HistorySvg />,
    text: 'Order history',
  },
  {
    id: 3,
    isLink: false,
    icon: <BookmarkSvg />,
    text: 'Saved stores',
  },
  {
    id: 4,
    isLink: false,
    icon: <HeartSvg />,
    text: 'Liked products',
  },
  {
    id: 5,
    isLink: false,
    icon: <EyeSvg />,
    text: 'Viewed products',
  },
  {
    id: 6,
    isLink: false,
    icon: <WalletSvg />,
    text: 'Wallet history',
  },
  {
    id: 7,
    isLink: false,
    icon: <UserSvg />,
    text: 'Profile setting',
  },
]

export const menuActionsData = [
  {
    id: 1,
    isLink: true,
    icon: <HeadphonesSvg />,
    text: 'Help center',
  },
  {
    id: 2,
    isLink: true,
    icon: <LogoutSvg />,
    text: 'Logout',
  },
]
