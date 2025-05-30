import {
  AlertOctagon,
  ArrowLeft,
  CornerDownRight,
  FileBadge,
  History,
  Inbox,
  ListFilter,
  RefreshCw,
  Scan,
  Trash2,
  X,
} from '@tamagui/lucide-icons'
import { forwardRef } from 'react'
import type { NumberProp, SvgProps } from 'react-native-svg'

import {
  ArrowLeftIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  ArrowsRightLeftIcon,
  BackspaceIcon,
  Bars3Icon,
  BellIcon,
  BuildingOfficeIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronRightIcon,
  CircleStackIcon,
  CloudIcon,
  Cog8ToothIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
  ExclamationCircleIcon,
  FingerPrintIcon,
  GlobeAltIcon,
  HandRaisedIcon,
  IdentificationIcon,
  InformationCircleIcon,
  KeyIcon,
  LinkIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  NoSymbolIcon,
  PencilIcon,
  PlusIcon,
  QrCodeIcon,
  QuestionMarkCircleIcon,
  QueueListIcon,
  ShieldCheckIcon,
  StarIcon,
  TrashIcon,
  UserIcon,
  XCircleIcon,
  XMarkIcon,
} from 'react-native-heroicons/outline'
import {
  ArchiveBoxXMarkIcon as ArchiveBoxXMarkFilledIcon,
  ArrowUpRightIcon as ArrowUpRightFilledIcon,
  BellIcon as BellFilledIcon,
  BoltIcon as BoltFilledIcon,
  CameraIcon as CameraFilledIcon,
  ChatBubbleBottomCenterTextIcon as ChatBubbleBottomCenterTextFilledIcon,
  CheckCircleIcon as CheckCircleFilledIcon,
  CircleStackIcon as CircleStackFilledIcon,
  ClockIcon as ClockFilledIcon,
  CodeBracketIcon as CodeBracketFilledIcon,
  Cog8ToothIcon as Cog8ToothFilledIcon,
  CommandLineIcon,
  CpuChipIcon as CpuChipFilledIcon,
  CreditCardIcon as CreditCardFilledIcon,
  ExclamationCircleIcon as ExclamationCircleFilledIcon,
  ExclamationTriangleIcon as ExclamationTriangleFilledIcon,
  EyeIcon as EyeFilledIcon,
  EyeSlashIcon as EyeSlashFilledIcon,
  HandRaisedIcon as HandRaisedFilledIcon,
  IdentificationIcon as IdentificationFilledIcon,
  InformationCircleIcon as InformationCircleFilledIcon,
  LockClosedIcon as LockClosedFilledIcon,
  PencilIcon as PencilFilledIcon,
  QueueListIcon as QueueListFilledIcon,
  ShieldCheckIcon as ShieldCheckFilledIcon,
  TrashIcon as TrashFilledIcon,
} from 'react-native-heroicons/solid'

import { styled } from 'tamagui'
import { ConnectIcon } from '../assets/Connect'
import { ExclamationIcon } from '../assets/Exclamation'
import { FaceIdIcon } from '../assets/FaceId'
import { PeopleIcon } from '../assets/People'
import { QrIcon } from '../assets/Qr'

export const LucideIcons = {
  Trash2,
  ArrowLeft,
  ListFilter,
  Scan,
  FileBadge,
  CornerDownRight,
  AlertOctagon,
  Inbox,
  X,
  RefreshCw,
  History,
}

export interface HeroIconProps extends SvgProps {
  size?: NumberProp
}

function wrapHeroIcon(Icon: React.FunctionComponent<HeroIconProps>) {
  return styled(
    forwardRef((props: HeroIconProps, ref) => <Icon {...props} />),
    {},
    {
      accept: {
        color: 'color',
      },
    }
  )
}

export type HeroIcon = ReturnType<typeof wrapHeroIcon>
export const HeroIcons = {
  Bell: wrapHeroIcon(BellIcon),
  BellFilled: wrapHeroIcon(BellFilledIcon),
  Plus: wrapHeroIcon(PlusIcon),
  Trash: wrapHeroIcon(TrashIcon),
  TrashFilled: wrapHeroIcon(TrashFilledIcon),
  ArchiveBoxXMarkFilled: wrapHeroIcon(ArchiveBoxXMarkFilledIcon),
  ClockFilled: wrapHeroIcon(ClockFilledIcon),
  BuildingOffice: wrapHeroIcon(BuildingOfficeIcon),
  GlobeAlt: wrapHeroIcon(GlobeAltIcon),
  Key: wrapHeroIcon(KeyIcon),
  Identification: wrapHeroIcon(IdentificationIcon),
  Star: wrapHeroIcon(StarIcon),
  Bolt: wrapHeroIcon(BoltFilledIcon),
  ShieldCheck: wrapHeroIcon(ShieldCheckIcon),
  ArrowPath: wrapHeroIcon(ArrowPathIcon),
  LockClosed: wrapHeroIcon(LockClosedIcon),
  ArrowRight: wrapHeroIcon(ArrowRightIcon),
  ArrowLeft: wrapHeroIcon(ArrowLeftIcon),
  Backspace: wrapHeroIcon(BackspaceIcon),
  ExclamationCircle: wrapHeroIcon(ExclamationCircleIcon),
  CheckCircle: wrapHeroIcon(CheckCircleIcon),
  Scan: wrapHeroIcon(QrCodeIcon),
  CreditCard: wrapHeroIcon(CreditCardIcon),
  CreditCardFilled: wrapHeroIcon(CreditCardFilledIcon),
  DevicePhoneMobile: wrapHeroIcon(DevicePhoneMobileIcon),
  HandRaised: wrapHeroIcon(HandRaisedIcon),
  HandRaisedFilled: wrapHeroIcon(HandRaisedFilledIcon),
  XCircle: wrapHeroIcon(XCircleIcon),
  InformationCircle: wrapHeroIcon(InformationCircleIcon),
  CircleStack: wrapHeroIcon(CircleStackIcon),
  CircleStackFilled: wrapHeroIcon(CircleStackFilledIcon),
  X: wrapHeroIcon(XMarkIcon),
  QrCode: wrapHeroIcon(QrCodeIcon),
  QuestionMarkCircle: wrapHeroIcon(QuestionMarkCircleIcon),
  FingerPrint: wrapHeroIcon(FingerPrintIcon),
  User: wrapHeroIcon(UserIcon),
  Bars3: wrapHeroIcon(Bars3Icon),
  EllipsisVertical: wrapHeroIcon(EllipsisVerticalIcon),
  EllipsisHorizontal: wrapHeroIcon(EllipsisHorizontalIcon),
  Eye: wrapHeroIcon(EyeFilledIcon),
  EyeSlash: wrapHeroIcon(EyeSlashFilledIcon),
  Activity: wrapHeroIcon(QueueListIcon),
  Settings: wrapHeroIcon(Cog8ToothIcon),
  Feedback: wrapHeroIcon(ChatBubbleBottomCenterTextIcon),
  ChevronRight: wrapHeroIcon(ChevronRightIcon),
  Menu: wrapHeroIcon(Bars3Icon),
  Interaction: wrapHeroIcon(ArrowsRightLeftIcon),
  ExclamationCircleFilled: wrapHeroIcon(ExclamationCircleFilledIcon),
  ExclamationTriangleFilled: wrapHeroIcon(ExclamationTriangleFilledIcon),
  NoSymbol: wrapHeroIcon(NoSymbolIcon),
  ShieldCheckFilled: wrapHeroIcon(ShieldCheckFilledIcon),
  Check: wrapHeroIcon(CheckIcon),
  InformationCircleFilled: wrapHeroIcon(InformationCircleFilledIcon),
  CheckCircleFilled: wrapHeroIcon(CheckCircleFilledIcon),
  QueueListFilled: wrapHeroIcon(QueueListFilledIcon),
  ChatBubbleBottomCenterTextFilled: wrapHeroIcon(ChatBubbleBottomCenterTextFilledIcon),
  Cog8ToothFilled: wrapHeroIcon(Cog8ToothFilledIcon),
  IdentificationFilled: wrapHeroIcon(IdentificationFilledIcon),
  CameraFilled: wrapHeroIcon(CameraFilledIcon),
  MagnifyingGlass: wrapHeroIcon(MagnifyingGlassIcon),
  Link: wrapHeroIcon(LinkIcon),
  Cloud: wrapHeroIcon(CloudIcon),
  CpuChipFilled: wrapHeroIcon(CpuChipFilledIcon),
  CommandLineFilled: wrapHeroIcon(CommandLineIcon),
  LockClosedFilled: wrapHeroIcon(LockClosedFilledIcon),
  CodeBracketFilled: wrapHeroIcon(CodeBracketFilledIcon),
  ArrowUpRightFilled: wrapHeroIcon(ArrowUpRightFilledIcon),
  PenFilled: wrapHeroIcon(PencilFilledIcon),
  Pen: wrapHeroIcon(PencilIcon),
} as const

export const CustomIcons = {
  Exclamation: wrapLocalSvg(ExclamationIcon as React.ComponentType<SvgProps>),
  Connect: wrapLocalSvg(ConnectIcon as React.ComponentType<SvgProps>),
  FaceId: wrapLocalSvg(FaceIdIcon as React.ComponentType<SvgProps>),
  Qr: wrapLocalSvg(QrIcon as React.ComponentType<SvgProps>),
  People: wrapLocalSvg(PeopleIcon as React.ComponentType<SvgProps>),
}

export type CustomIconProps = SvgProps & {
  size?: NumberProp
}

function wrapLocalSvg(SvgComponent: React.ComponentType<CustomIconProps>) {
  return styled(
    forwardRef((props: CustomIconProps, ref) => {
      const { size, ...restProps } = props
      return <SvgComponent width={size} height={size} {...restProps} />
    }),
    {},
    {
      accept: {
        color: 'color',
      },
    }
  )
}
