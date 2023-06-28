export const useMetrics = () => {
    const chartPie = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'horizontal',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                colorBy: 'data',
                data: [
                    { value: 1048, name: 'Expense', itemStyle: { color: '#EE6767' } },
                    { value: 735, name: 'Incoming', itemStyle: { color: '#91CC75' } },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    const chartStacked = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    const barOption = {
        legend: {
            data: ['Expense', 'Incoming'],
            left: '10%'
        },
        brush: {
            toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
            xAxisIndex: 0
        },
        toolbox: {
            feature: {
                magicType: {
                    type: ['stack']
                },
                dataView: {}
            }
        },
        tooltip: {},
        xAxis: {
            data: [1, 2, 3, 4],
            name: 'X Axis',
            axisLine: { onZero: true },
            splitLine: { show: false },
            splitArea: { show: false }
        },
        yAxis: {},
        grid: {
            bottom: 100
        },
        series: [
            {
                name: 'Expense',
                type: 'bar',
                stack: 'one',
                data: [100, 200, 500, -680]
            },
            {
                name: 'Incoming',
                type: 'bar',
                stack: 'one',
                data: [1115, 500, 600, 900]
            }
        ]
    };

    return { chartPie, chartStacked, barOption };
}