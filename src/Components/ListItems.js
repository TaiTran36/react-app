import React, {useEffect} from 'react'
import Item from './Item'
import axios from "axios";
export default function ListItems(){

    const [listData, setListData] = React.useState([]);


    useEffect( () => {
        const apiGetData = "https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users";
        axios
        .get(apiGetData)
        .then((res) => {
            setListData(res.data);
        })
        .catch((error) => {
            alert("Can't connect to server");
        })
        .finally(() => {

        })
    }, []);

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th style={{ width: '10%' }} className="text-center">#</th>
                    <th>Name</th>
                    <th>Mail</th>
                    <th style={{ width: '15%' }} className="text-center">Avatar</th>
                    <th style={{ width: '15%' }}>Action</th>
                </tr>
            </thead>
            <tbody>
                {listData.map((item, index) => {
                    return (
                        <Item index={index+1} item={item} key={item.id} />
                    )
                })}
            </tbody>
        </table>
    )
}
