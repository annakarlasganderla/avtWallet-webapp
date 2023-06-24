import { FilterOptions } from "../../../../../../types/Interfaces.type";

export interface ISideNavProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    setWhere: (value: FilterOptions) => void;
}