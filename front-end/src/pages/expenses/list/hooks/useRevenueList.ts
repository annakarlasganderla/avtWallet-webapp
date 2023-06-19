import { useState } from "react"
import { IRevenueList, IRevenueOptions, RevenueEntity } from "../utils/revenuesList.types";
import RevenueApi from "../../../../api/Revenues";
import { useQuery } from "react-query";


export const useRevenueList = () => {
    const revenueApi = RevenueApi();
    const [revenueList, setRevenueList] = useState<IRevenueList>();
    const [pageable, setPageable] = useState<IRevenueOptions>({
        order: "ASC",
        page: 1,
        take: 10,
        where: {}
    });

    useQuery<IRevenueList>(["revenue-list", { pageable }], {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        queryFn: () => revenueApi.listAllRevenuesPageable(pageable),
        onSuccess: (data) => {
            if (data.options.page === 1 && !revenueList?.options.hasNextPage) {
                return setRevenueList(data);
            }
            if (revenueList) {
                return setRevenueList({ data: [...revenueList?.data, ...data.data], options: data.options })
            }
        },
        onError: (error) => {
            console.log(error)
        },
    },
    )

    const changePage = (value: number) => {
        if (value && revenueList?.options.hasNextPage) {
            setPageable({
                ...pageable,
                page: pageable.page + 1,
            }

            )
        }
    }

    return { list: revenueList?.data, changePage }
}