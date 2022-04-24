import React from 'react'
import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';




export const UserList = (props: any) => {
    return (
        <List {...props} title='Users' pagination={false}>
            
            <Datagrid title='AllUsers'>
                <TextField source="id" />
                <TextField source="email" />
                <TextField source="surname" />
                <TextField source="name" />
                <TextField source="patronymic" />
                <TextField source="birthdate" />
                <TextField source="post_status" />
                <TextField source="place_of_work_or_stud" />
                <TextField source="phone" />
                <TextField source="move_to" />
                <TextField source="move_from" />
            </Datagrid>
        </List>
    )



}

