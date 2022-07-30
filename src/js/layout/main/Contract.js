import React, { useEffect, useState } from "react";
import { apiGetAllContract } from "../../api/CommonApi";

export function Contract(){
    const [contractList, setContractList] = useState([]) 

    useEffect(()=>{
        async function callApi(){
            return await apiGetAllContract()
        }
        callApi().then((rs) => {
            if(rs.message === "success"){
                console.log(rs.data);
                let contractListCopy = [...contractList]
                contractListCopy = rs.data
                setContractList(contractListCopy)
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
                        <th scope="col">userId</th>
                        <th scope="col">Phương thức thanh toán</th>
                        <th scope="col">Thời gian bắt đầu</th>
                        <th scope="col">Thời gian kết thúc</th>
                    </tr>
                </thead>
                <tbody>
                    {contractList.map((item, index) => 
                         
                        <tr key={index}>
                            <th scope="col">{item.id}</th>
                            <th scope="col">{item.userId}</th>
                            <th scope="col">{item.paymentMethod}</th>
                            <th scope="col">{item.startTime}</th>
                            <th scope="col">{item.endTime}</th>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}