export type ChatRoom = {
    createdAt: string,
    id: string
    lastMessageDate: firebase.default.firestore.Timestamp
    lasteMessage: string
    users: Array<string>,
    user?: User,
    videoWaiting: boolean,
    messages: Array<Message>
}

export type User = {
    avatar: string,
    uid: string,
    name: string,
    username: string
}

export type Message = {
    _id: string,
    createdAt: string,
    text: string,
    user: {
        _id: number,
    },
}