import Featured from '../Featured/Featured';
import Chart from '../Chart/Chart';
import { userData } from "../../../dummyData";
import WidgetSm from '../WidgetSm/WidgetSm';
import WidgetLg from '../WidgetLg/WidgetLg';

const Home = () => {
    return (
        <div className='w-full pb-6'>
            <Featured />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className='w-full flex px-4'>
                <div className='w-2/5 border shadow-md mx-1 rounded'>
                    <WidgetSm />
                </div>
                <div className='w-3/5 border shadow-md mx-1 rounded'>
                    <WidgetLg />
                </div>
            </div>
        </div>
    );
};

export default Home;