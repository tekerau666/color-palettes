import {FC} from "react";
import {IUser} from "./types/Types";
import {UserItem} from "./UserItem";


interface UserListProps {
	users: IUser[]
}
export const UserList: FC<UserListProps> = ({ users }) => {

	return (
		<>
			{users.map(user =>
				<UserItem key={user.id} user={user}/>
			)}
		</>
	)
}