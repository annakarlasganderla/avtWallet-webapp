import { useState } from "react";
import RevenueApi from "../../../../api/Revenues";
import { IRevenueList, IRevenueOptions } from "../../list/utils/revenuesList.types";
import { useQuery } from "react-query";
import { FilterOptions, ISelectOption } from "../../../../types/Interfaces.type";
import { Tags } from "../../../../types/tags.types";
import TagsApi from "../../../../api/Tags";

export const useListExtracts = () => {
	const revenueApi = RevenueApi();
	const tagApi = TagsApi();
	const [revenueList, setRevenueList] = useState<IRevenueList>();
	const [tags, setTags] = useState<ISelectOption[]>([]);
	const [pageable, setPageable] = useState<IRevenueOptions>({
		order: "ASC",
		page: 1,
		take: 10,
		where: {},
	});

	useQuery("tags-list", {
		queryFn: () => tagApi.listAllTags(),
		onSuccess: (data) => {
			setTags(
				data?.map((e: Tags) => {
					return { name: e.name, data: e.id };
				}),
			);
		},
		onError: (error) => {
			console.log(error);
		},
	});

	const { isLoading } = useQuery<IRevenueList>(["revenue-list", { pageable }], {
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

	const changePage = () => {
		if (revenueList?.options.hasNextPage) {
			setPageable({
				...pageable,
				page: pageable.page + 1,
			});
		}
	};

	const setListFiltered = (values: FilterOptions) => {
		setPageable({ ...pageable, where: values });
	};

	return {
		list: revenueList?.data,
		changePage,
		tags,
		setListFiltered,
		loading: isLoading,
	};
};
