import { IColumn } from "../../../components/List/utils/list.types";
import { IRevenue } from "../../../types/Interfaces.type";
import { BsCurrencyEuro, BsTrash } from "react-icons/bs";
import { AiOutlineRight, AiOutlineFilter } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import List from "../../../components/List";
import SideNav from '../../../components/SideNav';
import { useState } from "react";

const ExtractsList = () => {

    const [open, setOpen] = useState(false);

    const columns: IColumn<IRevenue>[] = [
        {
            name: "name",
            type: "text",
            bold: true,
        },
        {
            name: "value",
            type: "currency",
            bold: true,
        },
        {
            name: "tag",
            onRender: (item) => (
                <div className="bg-black text-white font-bold rounded-lg p-1 hidden md:flex">
                    {item.tag?.name}
                </div>
            ),
        },
        {
            name: "actions",
            onRender: (item) => (
                <div className="flex gap-6">
                    <BsTrash className="hidden md:block" />
                    <AiOutlineRight className="md:hidden" />
                    <MdEdit className="hidden md:block" />
                </div>
            ),
        },
    ];

    const items = [
        {
            name: "Anna",
            value: 33,
            tag: { name: "lazer" },
        },
        {
            name: "Anna",
            value: 31,
            tag: { name: "lazer" },
        },
        {
            name: "Anna",
            value: 32,
            tag: { name: "comida" },
        },
    ];

    return (
        <>
            <header className="w-full h-20 flex items-center bg-black text-gray-50 ">
                <div className="w-full flex justify-between items-center mx-8">
                    <BsCurrencyEuro className="block" color="white" size={50} />
                    <h2>Hello, @fulano</h2>
                </div>
            </header>

            <SideNav isOpen={open} setIsOpen={setOpen} />

            <main className="w-100 flex flex-col items-center">
                <div className="w-4/5 h-20 flex items-center justify-end mt-2 mb-2 md:w-3/5">
                    <AiOutlineFilter className="block" onClick={() => setOpen(!open)} cursor={'pointer'} color="black" size={30} />
                </div>
                <div className="w-4/5 flex justify-center items-center mb-8 md:w-3/5">
                    <List columns={columns} items={items} isTitle={false} />
                </div>
            </main>
        </>
    );
}

export default ExtractsList;