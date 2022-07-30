import React, { useState } from "react";
import { useEffect } from "react";
import { apiGetAllStation } from "../../api/CommonApi";

export function Station() {

    const [stationList, setStationList] = useState([]) 

    useEffect(()=>{
        async function callApi(){
            return await apiGetAllStation()
        }
        callApi().then((rs) => {
            if(rs.message === "success"){
                console.log(rs.data);
                let stationListCopy = [...stationList]
                stationListCopy = rs.data
                setStationList(stationListCopy)
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
                        <th scope="col">Tên</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Số xe/số slot</th>
                    </tr>
                </thead>
                <tbody>
                    {stationList.map((item, index) => 
                         
                        <tr key={index}>
                            <th scope="col">{item.id}</th>
                            <th scope="col">{item.name}</th>
                            <th scope="col">{item.location}</th>
                            <th scope="col">{item.currentNumberCar}/{item.slotQuantity}</th>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}