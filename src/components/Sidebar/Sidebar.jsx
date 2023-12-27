import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {

    return (
        <div className="fixed h-[100vh] w-1/5 overflow-y-scroll webkit bg-sky-100 top-16">
            <div className="px-2">
                <div className="py-3 px-4">
                    <p className="text-gray-500 text-sm font-medium pb-1">Dashboard</p>
                    <Link to="/">
                        <div className="flex items-center py-1 px-4  rounded-md">
                            <div className="flex items-center text-lg">
                                <ion-icon name="home-outline"></ion-icon>
                            </div>
                            <span className="text-[15px] mx-3 font-medium">Home</span>
                        </div>
                    </Link>
                    <div className="flex items-center py-1 px-4 rounded-md">
                        <div className="flex items-center text-lg">
                            <ion-icon name="analytics-outline"></ion-icon>
                        </div>
                        <span className="text-[15px] mx-3 font-medium">Analytics</span>
                    </div>
                    <div className="flex items-center py-1 px-4 rounded-md">
                        <div className="flex items-center text-lg">
                            <ion-icon name="bar-chart-outline"></ion-icon>
                        </div>
                        <span className="text-[15px] mx-3 font-medium">Sales</span>
                    </div>
                </div>

                <div className="py-2 px-4">
                    <p className="text-gray-500 text-sm font-medium pb-1">Quick Menu</p>
                    <Link to="/users">
                        <div className="flex items-center py-1 px-4 rounded-md">
                            <div className="flex items-center text-lg">
                                <ion-icon name="person-outline"></ion-icon>
                            </div>
                            <span className="text-[15px] mx-3 font-medium">Users</span>
                        </div>
                    </Link>
                    <Link to="/products">
                        <div className="flex items-center py-1 px-4 rounded-md">
                            <div className="flex items-center text-lg">
                                <ion-icon name="bag-outline"></ion-icon>
                            </div>
                            <span className="text-[15px] mx-3 font-medium">Products</span>
                        </div>
                    </Link>
                    <div className="flex items-center py-1 px-4 rounded-md">
                        <div className="flex items-center text-lg">
                            <ion-icon name="cash-outline"></ion-icon>
                        </div>
                        <span className="text-[15px] mx-3 font-medium">Transactions</span>
                    </div>
                    <div className="flex items-center py-1 px-4 rounded-md">
                        <div className="flex items-center text-lg">
                            <ion-icon name="stats-chart-outline"></ion-icon>
                        </div>
                        <span className="text-[15px] mx-3 font-medium">Reports</span>
                    </div>
                </div>

                <div className="py-2 px-4">
                    <p className="text-gray-500 text-sm font-medium pb-1">Notifications</p>
                    <div className="flex items-center py-1 px-4 rounded-md">
                        <div className="flex items-center text-lg">
                            <ion-icon name="mail-open-outline"></ion-icon>
                        </div>
                        <span className="text-[15px] mx-3 font-medium">Mail</span>
                    </div>
                    <div className="flex items-center py-1 px-4 rounded-md">
                        <div className="flex items-center text-lg">
                            <ion-icon name="file-tray-full-outline"></ion-icon>
                        </div>
                        <span className="text-[15px] mx-3 font-medium">Feedback</span>
                    </div>
                    <div className="flex items-center py-1 px-4 rounded-md">
                        <div className="flex items-center text-lg">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>
                        <span className="text-[15px] mx-3 font-medium">Messages</span>
                    </div>
                </div>

                <div className="py-2 px-4">
                    <p className="text-gray-500 text-sm font-medium pb-1">Stuff</p>
                    <div className="flex items-center py-1 px-4 rounded-md">
                        <div className="flex items-center text-lg">
                            <ion-icon name="document-outline"></ion-icon>
                        </div>
                        <span className="text-[15px] mx-3 font-medium">Manages</span>
                    </div>
                    <div className="flex items-center py-1 px-4 rounded-md">
                        <div className="flex items-center text-lg">
                            <ion-icon name="analytics-outline"></ion-icon>
                        </div>
                        <span className="text-[15px] mx-3 font-medium">Analytics</span>
                    </div>
                    <div className="flex items-center py-1 px-4 rounded-md">
                        <div className="flex items-center text-lg">
                            <ion-icon name="stats-chart-outline"></ion-icon>
                        </div>
                        <span className="text-[15px] mx-3 font-medium">Report</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;