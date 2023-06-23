import {FC} from "react";
import {IUser} from "./types/Types";


interface UserItemProps {
	user: IUser
}
export const UserItem: FC<UserItemProps> = ({ user }) => {
	return (
		<>
			<div style={{padding: '10px', border: '1px solid grey'}}>
				{user.id} - {user.name} проживает в городе {user.address.city} на улице {user.address.street}
			</div>
		</>
	)
}