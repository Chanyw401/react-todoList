import {Button, Radio} from "antd";

interface ItemProps {
    item: any;
    handleClickItem: (id: number) => void;
    handleDelItem: (id: number) => void;
}


const FooterItem = ({item, handleClickItem, handleDelItem}: ItemProps) => {
    return (
        <div className="item" key={item.id}>
            <Radio checked={item.done} disabled={item.done} onChange={() => handleClickItem(item.id)}/>
            <div className="name">   {item.name}</div>
            <Button type="primary" danger onClick={() => handleDelItem(item.id)}>删除</Button>
        </div>
    )
}

export default FooterItem
