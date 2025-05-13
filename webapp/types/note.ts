export interface Note {
    title: string,
    description: string,
}

export interface AddNote {
    title: string,
    description: string,
    user_email: string,
    isOAuth: boolean,
}
