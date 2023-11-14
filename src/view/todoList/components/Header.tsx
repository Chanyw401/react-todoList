import {useState,ChangeEvent} from "react";
import {Input, Button} from "antd";

interface HeaderProps {
    addItem: (value: any) => void
}

const Header = ({addItem}:HeaderProps)  => {
    const [value, setValue] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const handleAddItem = () => {
        addItem(value);
        setValue('');

    }

    return (
        <div className='header'>
            <Input value={value} onChange={(e) => handleChange(e)} onPressEnter={handleAddItem} placeholder="请输入"/>
            <Button type="primary" onClick={handleAddItem}>添加</Button>
        </div>
    )
}

export default Header
