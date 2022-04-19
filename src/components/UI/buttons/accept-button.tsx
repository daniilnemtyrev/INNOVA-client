import React, { useState } from "react"
import { useRefresh } from "react-admin"
import styled from "styled-components"
import UserService from "../../../services/userService"
import { colors } from "../../../styles/colors/colors"


export const AcceptButton = ({ record }: any) => {
  const refresh = useRefresh();
  return (
    <Button onClick={() => { UserService.editUser({ ...record, request_status: "Подтверждена" }).then(() => refresh()) }}>Принять</Button>
  ) 
}

const Button = styled.button`
cursor: pointer;
height: 25px;
width: 90px;
background-color: ${colors.green};
border-radius: 4px;
text-align:center;
color: ${colors.white};
font: 400 14px Verdana;
border-style:none;
transition: ease background-color 250ms;
 &:hover {
    background-color: ${colors.darkgreen};
  }
`
