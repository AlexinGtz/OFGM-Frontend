export type NavBarProps = {
    className?: string,
}

export type Item = {
    link: string,
    tabName: string,
    authNeeded: boolean,
    userType: number,
    tabPhoto?: string,
}