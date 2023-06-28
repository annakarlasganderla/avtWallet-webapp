import { AiOutlineFilter } from "react-icons/ai";
import { useMetrics } from "./hooks/useMetrics";
import ReactECharts from "echarts-for-react";
import useBoolean from "../../hooks/useBoolean";

const Metrics = () => {

    const { chartPie, chartStacked, barOption } = useMetrics();
    const [bool, { setTrue, setFalse }] = useBoolean(false);

    return (
        <main className="w-full h-full flex flex-1 md:h-4/5 flex-col items-center gap-y-4 overflow-auto md:gap-y-10">
            <div className="w-4/5 h-20 flex items-center justify-end mt-5 mb-2 md:w-4/5">
                <AiOutlineFilter
                    className="block"
                    onClick={() => setTrue()}
                    cursor={"pointer"}
                    color="black"
                    size={30}
                />
            </div>

            <div className="w-4/5 h-3/5 lg:h-4/5 md:w-4/5">
                <div className="flex flex-col gap-x-5 md:flex-row flex-1">
                    <div className="w-full shadow-lg shadow-indigo-500/10 p-5 md:w-1/2">
                        <ReactECharts
                            option={chartPie}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={"theme_name"}
                        />
                    </div>

                    <div className="w-full shadow-lg shadow-indigo-500/10 p-5 md:w-1/2">
                        <ReactECharts
                            option={chartStacked}
                            notMerge={true}
                            lazyUpdate={true}
                            theme={"theme_name"}
                        />
                    </div>
                </div>

                <div className="w-full shadow-lg shadow-indigo-500/10 mt-5 p-5">
                    <ReactECharts
                        option={barOption}
                        notMerge={true}
                        lazyUpdate={true}
                        theme={"theme_name"}
                    />
                </div>
            </div>
        </main>
    );
}

export default Metrics;