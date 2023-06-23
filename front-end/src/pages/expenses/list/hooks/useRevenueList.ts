import { useMemo, useState } from "react";
import { IRevenueList, IRevenueOptions } from "../utils/revenuesList.types";
import RevenueApi from "../../../../api/Revenues";
import { useMutation, useQuery, useQueryClient } from "react-query";
import useAuth from "../../../../context/hooks/useAuth";

export const useRevenueList = () => {
	const { user } = useAuth();
	const revenueApi = RevenueApi();
	const queryClient = useQueryClient();
	const [revenueList, setRevenueList] = useState<IRevenueList>();
	const [pageable, setPageable] = useState<IRevenueOptions>({
		order: "ASC",
		page: 1,
		take: 10,
		where: {
			user: user.uuid,
		},
	});

	const amount = useQuery(
		["amount", { revenueList }],
		async () => {
			return await revenueApi.getAmount();
		},
		{ keepPreviousData: true, refetchOnWindowFocus: false },
	);

	useQuery<IRevenueList>(["revenue-list", { pageable }], {
		keepPreviousData: true,
		refetchOnWindowFocus: false,
		queryFn: () => revenueApi.listAllRevenuesPageable(pageable),
		onSuccess: (data) => {
			if (data.options.page === 1 && !revenueList?.options.hasNextPage) {
				return setRevenueList(data);
			}
			if (revenueList) {
				return setRevenueList({
					data: [...revenueList?.data, ...data.data],
					options: data.options,
				});
			}
		},
		onError: (error) => {
			console.log(error);
		},
	});

	const changePage = (value: number) => {
		if (value && revenueList?.options.hasNextPage) {
			setPageable({
				...pageable,
				page: pageable.page + 1,
			});
		}
	};

	const deleteRevenue = useMutation(
		async (id: string | undefined) => {
			if (id) {
				return await revenueApi.deleteRevenue(id);
			}
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(["revenue-list"]);
			},
		},
	);

	return { list: revenueList?.data, changePage, deleteRevenue, amount: amount.data };
};
