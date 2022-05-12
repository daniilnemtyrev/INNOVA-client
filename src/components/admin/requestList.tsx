import React from 'react'
import { List, Datagrid, TextField, DateField, BooleanField, useRecordContext } from 'react-admin';
import { AcceptButton } from '../UI/buttons/accept-button';
import { RejectButton } from '../UI/buttons/reject-button';

export const RequestList = (props: any) => {
    const record = useRecordContext();
    return (
        <List {...props} title='Request' pagination={false}>
            <Datagrid title='Requests'>
                <TextField source="id" />
                <TextField source="email" />
                <TextField source="surname" />
                <TextField source="name" />
                <TextField source="patronymic" />
                <TextField source="birthdate" />
                <AcceptButton record={record} />
                <RejectButton record={record} />
            </Datagrid>
        </List>
    )



}

