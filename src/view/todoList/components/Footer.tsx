import {useMemo} from "react";
import FooterItem from "./FooterItem";

interface FooterProps {
    list: any[],
    clickItem: (id: number) => void,
    delItem: (id: number) => void
}


const Footer = ({list, clickItem, delItem}: FooterProps) => {

    const unFinishList = useMemo(() => {
        return list.filter(item => !item.done)
    }, [list])

    const finishList = useMemo(() => {
        return list.filter(item => item.done)
    }, [list])

    const handleClickItem = (id: number) => {
        clickItem(id)
    }
    const handleDelItem = (id: number) => {
        delItem(id)
    }
    return (
        <div className='content'>
            <div className="unfine-box">
                <div className="title">待完成</div>
                {unFinishList.map((item) => (
                    <FooterItem key={item.id} item={item} handleClickItem={handleClickItem} handleDelItem={handleDelItem}/>
                    // <div className="item" key={item.id}>
                    //     <Radio checked={item.done} onChange={() => handleClickItem(item.id)}/>
                    //     <div className="name">   {item.name}</div>
                    //     <Button type="primary" danger onClick={() => handleDelItem(item.id)}>删除</Button>
                    // </div>
                ))}
            </div>
            <div className="fine-box">
                <div className="title">完成</div>
                {finishList.map((item) => (
                    <FooterItem key={item.id} item={item} handleClickItem={handleClickItem} handleDelItem={handleDelItem}/>
                ))}
            </div>


        </div>
    )
}
export default Footer
