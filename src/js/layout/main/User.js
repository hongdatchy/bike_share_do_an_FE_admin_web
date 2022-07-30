import React, { useEffect, useState } from "react";
import { apiGetAllUser } from "../../api/CommonApi";

export function User(){

    const [userList, setUserList] = useState([]) 

    useEffect(()=>{
        async function callApi(){
            return await apiGetAllUser()
        }
        callApi().then((rs) => {
            if(rs.message === "success"){
                console.log(rs.data);
                let userListCopy = [...userList]
                userListCopy = rs.data
                setUserList(userListCopy)
            }
        })
        // không xoá dòng dưới để không bị warning
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Email</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((item, index) => 
                         
                        <tr key={index}>
                            <th scope="col">{item.id}</th>
                            <th scope="col">{item.email}</th>
                            <th scope="col">{item.lastname} {item.firstname}</th>
                            <th scope="col">{item.phone}</th>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}