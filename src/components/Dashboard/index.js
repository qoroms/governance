import React, { useEffect } from "react";
import Overview from "./Overview";
import RecentProposals from "./RecentProposals";
import TopAddresses from "./TopAddresses";

const Dashboard = () => {
    const fetchData = async () => {
        // const data = await thegraph.fetchAggregatedData();
        // console.log(data);

        // const data = await thegraph.fetchProposals();
        // console.log(data);

        // const data = await thegraph.fetchActiveDelegates();
        // console.log(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div id="Dashboard">
                <section className="hero">
                    <Overview />
                </section>

                <section>
                    <div className="container">
                        <div className="content">
                            <RecentProposals />
                            <TopAddresses />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Dashboard;
