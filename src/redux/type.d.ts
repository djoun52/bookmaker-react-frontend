interface  UserState {
    id: number | null
    email: string | null | String
    pseudo: string | null | String
}



type UserAction = {
    type: string
    user: UserState
}

type DispatchType = (args: UserAction) => UserAction