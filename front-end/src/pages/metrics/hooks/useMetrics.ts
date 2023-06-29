import { useQuery } from "react-query";
import RevenueApi from "../../../api/Revenues";


export const useMetrics = () => {
    const revenueApi = RevenueApi();

    const pieChartData = useQuery("pie-chart",
        async () => {
            return await revenueApi.getRevenuePieChart();
        },
        { keepPreviousData: true, refetchOnWindowFocus: false },
    )

    const chartPie = {
        tooltip: {
            trigger: "item",
        },
        legend: {
            orient: "horizontal",
            left: "left",
        },
        series: [
            {
                name: "Access From",
                type: "pie",
                radius: "50%",
                colorBy: "data",
                data: [
                    { value: pieChartData.data?.expense, name: "Expense", itemStyle: { color: "#EE6767" } },
                    { value: pieChartData.data?.incoming, name: "Incoming", itemStyle: { color: "#91CC75" } },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)",
                    },
                },
            },
        ],
    };

    const chartStacked = {
        tooltip: {
            trigger: "axis",
        },
        legend: {
            data: ["Incoming", "Expense"],
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                name: "Incoming",
                type: "line",
                stack: "Total",
                data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
                name: "Expense",
                type: "line",
                stack: "Total",
                data: [220, 182, 191, 234, 290, 330, 310],
            },
        ],
    };

    const barOption = {
        legend: {
            data: ["Revenue"],
            left: "10%",
        },
        // brush: {
        // 	toolbox: ["rect", "polygon", "lineX", "lineY", "keep", "clear"],
        // 	xAxisIndex: 0,
        // },
        toolbox: {
            feature: {
                magicType: {
                    type: ["stack"],
                },
                dataView: {},
            },
        },
        tooltip: {},
        xAxis: {
            data: [1, 2, 3, 4],
            name: "X Axis",
            axisLine: { onZero: true },
            splitLine: { show: false },
            splitArea: { show: false },
        },
        yAxis: {},
        grid: {
            bottom: 100,
        },
        series: [
            {
                name: "Revenue",
                type: "bar",
                stack: "one",
                data: [100, 200, 500, -680],
            },
        ],
    };

    return { chartPie, chartStacked, barOption };
};
