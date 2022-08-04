interface  UserState {
    id: number | null
    email: string | null
    pseudo: string | null
    status: boolean
}

IUser

type UserAction = {
    type: string
    user: IArticle
}

type DispatchType = (args: UserAction) => UserAction