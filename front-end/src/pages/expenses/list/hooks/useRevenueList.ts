import { useState } from "react"
import { IRevenueList } from "../utils/revenuesList.types";

export const useRevenueList = () => {

    const [revenueList, setRevenueList] = useState<IRevenueList[]>([]);

    return { revenueList }
}