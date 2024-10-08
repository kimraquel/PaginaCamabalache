import { ButtonProps } from "./PropsTypes"

export type VoidFunction = () => void
export type MouseEvent = React.MouseEvent<HTMLElement>
export type EstadisticasData = {
    userCount: number,
    bannedUserCount: number,
    averageUserRating: number,
    donationCount: number,
    totalDonations: number,
    itemCount: number,
    availableItemCount: number,
    itemCategorysData: ItemCategoryData[],
    exchangesData: ExchangeData[],
    locationsData: LocationData[]
}
export type LocationData = {
    name: string,
    exchangesCount: number
}
export type ItemCategoryData = {
    name: string,
    itemsCount: number
}
export type ExchangeData = {
    stateName: string,
    exchangesCount: number
}

export type UserData = {
    name: string,
    dni: string,
    photo: string,
    phone: string,
    email: string,
    id: string,
    birthdate: string,
    password?: string
}
export type ExchangerData = {
    stars: number
    absentees: number
} & UserData
export type HelperData = {
    employeeLocation: LocationResponse
} & UserData
export type GeoPosition = {
    lat: number,
    lng: number
}
export type Location = {
    id?: string
    name?: string
    geoPosition: GeoPosition
}
export type LocationResponse = {
    id: string,
    name: string,
    coordinates: string
}
export type Tab = {
    text?: string,
    onClick?: VoidFunction,
    icon?: JSX.Element,
    active?: boolean,
    visible?: boolean
    customElement?: JSX.Element
}
export type DropdownItem = {
    text?: string,
    icon?: string
} & ButtonProps
export type Dropdown = {
    icon?: JSX.Element,
    items: Array<DropdownItem>
}
export type LocationFields = {
    description: string
}
export type NotificationType = 'error' | 'warning'
export type ExchangerCardData = {
    visible: boolean
} & ExchangerData
export type ItemData = {
    id?: number|string
    photo: string
    name: string
    description: string
    owner?: ExchangerData
    itemCategory: ItemCategory
    quantity:number|string,
    editable: boolean
}
export type ItemCategory = {
    id: number
    name: string
}
export type Review = {
    id: number
    name: string
    description: string
    stars: number
    date: string
}
export type UserInfoFields = {
    title: string
    value: string|number|JSX.Element
    color: string
}
export type CategoryListParam = {
    data: ItemCategory[],
    isLoading?: boolean
}

export type Exchange = {
    id: number;
    guestAsistio: boolean;
    hostAsistio: boolean;
    guestItem: ItemData;
    hostItem: ItemData;
    date: string;
    state?: 'NotConfirmed' | 'Rejected' | 'Accepted' | 'Canceled' | 'Completed' | 'NotComplitedByDislike' | 'NotComplitedByNonAttendance'
    location: Location;
    authenticationCode: string;
    
    reviewHost: string
    reviewGuest: string
    starsHost: number
    starsGuest: number
    dateReviewHost: string
    dateReviewGuest: string
}