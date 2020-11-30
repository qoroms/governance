import React, { useEffect, useState } from "react";
import { thegraph } from "../../../utils/thegraph";
import AlertModal from "../../Utils/AlertModal";

const Overview = () => {
    const [governanceData, setGovernanceData] = useState({});

    const [errorModal, setErrorModal] = useState({
        msg: "",
        open: false
    });

    const fetchData = () => {
        thegraph.fetchAggregatedData()
            .then((data) => {
                setGovernanceData(data);
            })
            .catch((error) => {
                setErrorModal({
                    open: true,
                    msg: error.message,
                });
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <h2>Zoracles Governance Overview</h2>

            <div id="dashboard-overview" className="row">
                <div className="col-sm-6 col-xs-12">
                    <div className="panel dark">
                        <a
                            id="zoracle-distribution-panel"
                            className="content"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://etherscan.io/token/0xD8E3FB3b08eBA982F2754988d70D57eDc0055ae6#balances`}
                        >
                            <div>
                                <div className="headline">10,000 ZORA</div>
                                <label>Zoracles Total Supply</label>
                            </div>

                            <div className="zoracle-remaining-view">
                                <div className="view-action">
                                    <span className="action-text">View</span>
                                    <span id="arrow" className="arrow" />
                                </div>
                                <div className="zoracle-remaining__bar">
                                    <div
                                        className="zoracle-remaining__bar__fill"
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-sm-3 col-xs-6">
                    <div className="panel dark">
                        <div className="content">
                            <div className={governanceData.delegatedVotes ?
                                "headline" :
                                "headline headline--loading"
                            }>
                                {governanceData.delegatedVotes ?
                                    Number(governanceData.delegatedVotes).toFixed(0) :
                                    null}
                            </div>
                            <label className={governanceData.delegatedVotes ?
                                "panel__label" :
                                "panel__label panel__label--loading"
                            }>
                                {governanceData.delegatedVotes ?
                                    <div>Votes Delegated</div> :
                                    null}
                            </label>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3 col-xs-6">
                    <div className="panel dark">
                        <div className="content">
                            <div className={governanceData.delegatedVotes ?
                                "headline" :
                                "headline headline--loading"
                            }>
                                {governanceData.currentDelegates}
                            </div>
                            <label className={governanceData.delegatedVotes ?
                                "panel__label" :
                                "panel__label panel__label--loading"
                            }>
                                {governanceData.delegatedVotes ?
                                    <div>Total Voters</div> :
                                    null}
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <AlertModal
                open={errorModal.open}
                toggle={() => setErrorModal({
                    ...errorModal, open: false
                })}
            >
                {errorModal.msg}
            </AlertModal>
        </div>
    );
};

export default Overview;
