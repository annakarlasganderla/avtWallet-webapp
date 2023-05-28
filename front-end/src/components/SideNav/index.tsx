import { useState } from 'react';
import { ISideNavProps } from './utils/sideNav.types';
import { AiOutlineClose } from 'react-icons/ai';
import TextField from '../TextField';
import InputValue from '../InputValue';
import Select from '../Select';
import Button from '../Button';

const SideNav = (props: ISideNavProps) => {

    const coinsOptions = [
        { text: "R$", data: "BRL" },
        { text: "U$", data: "USD" },
        { text: "€", data: "EUR" },
        { text: "ARS", data: "ARS" },
        { text: "Gs", data: "PYG" },
    ];

    return (
        <div className="flex">

            {/* Sidenav */}
            <div
                className={`fixed right-0 top-0 h-full bg-white text-black-100 w-full md:w-2/5 
                            flex flex-col justify-between z-40 transform transition-all 
                            duration-300 ease-in-out
                             ${props.isOpen ? 'translate-x-0' : 'translate-x-full'}
                            `}
            >
                <div className="py-5 px-5">
                    <div>
                        <AiOutlineClose cursor={'pointer'} size={30} onClick={() => props.setIsOpen(!props.isOpen)} />
                    </div>
                    <div className='flex justify-center items-center mt-5'>
                        <div className='flex flex-col gap-2 w-3/5 md:w-full'>

                            <TextField
                                type={"text"}
                                name={"name"}
                                placeholder={"Name"}
                            />

                            <InputValue
                                nameInput={"value"}
                                nameSelect={"coin"}
                                placeholder={"Value"}
                                options={coinsOptions}
                            />

                            <Select
                                name={"source"}
                                optionDefault={"Tag"}
                                options={[]}
                            />

                            <Select
                                name={"source"}
                                optionDefault={"Pay Method"}
                                options={[]}
                            />

                            <div className='flex justify-center items-center mt-6'>
                                <Button
                                    width={"50%"}
                                    height={"35px"}
                                    textsize={"16px"}
                                    type={"submit"}>
                                    Aplicar filtros
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNav;
