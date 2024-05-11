import React from 'react'

function Dashboard(props) {

    //     const user = sessionStorage.getItem('user');
    // if (user) return JSON.parse(user);
    // else return null;

    const handleLogout = () => {
        // remove the token and user from the session storage
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        props.history.push('/login');
      }

    return (
        <div className="main-panel">
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-md-12 grid-margin">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h4 className="font-weight-bold mb-0">Dashboard</h4>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Total Users</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">34040</h3>
                                    <i className="ti-calendar icon-md  mb-0 mb-md-3 mb-xl-0 text-info"></i>
                                </div>
                                <p className="mb-0 mt-2 text-danger">0.12% <span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Active Users</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">47033</h3>
                                    <i className="ti-user icon-md mb-0 mb-md-3 mb-xl-0 text-danger "></i>
                                </div>
                                <p className="mb-0 mt-2 text-danger">0.47% <span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Email Unverified Users</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0 " >40016</h3>
                                    <i className="ti-agenda icon-md mb-0 mb-md-3 mb-xl-0 text-primary "></i>
                                </div>
                                <p className="mb-0 mt-2 text-success">64.00%<span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Mobile Unverified Users</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">61344</h3>
                                    <i className="ti-layers-alt icon-md mb-0 mb-md-3 mb-xl-0 text-warning "></i>
                                </div>
                                <p className="mb-0 mt-2 text-success">23.00%<span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Pending Deposits</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">34040</h3>
                                    <i className="ti-calendar icon-md  mb-0 mb-md-3 mb-xl-0 text-danger "></i>
                                </div>
                                <p className="mb-0 mt-2 text-danger">0.12% <span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Rejected Deposits</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">47033</h3>
                                    <i className="ti-user icon-md mb-0 mb-md-3 mb-xl-0 text-info"></i>
                                </div>
                                <p className="mb-0 mt-2 text-danger">0.47% <span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Pending Withdrawals</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0" >40016</h3>
                                    <i className="ti-agenda icon-md mb-0 mb-md-3 mb-xl-0 text-warning"></i>
                                </div>
                                <p className="mb-0 mt-2 text-success">64.00%<span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Rejected Withdrawals</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">61344</h3>
                                    <i className="ti-layers-alt icon-md mb-0 mb-md-3 mb-xl-0 text-primary "></i>
                                </div>
                                <p className="mb-0 mt-2 text-success">23.00%<span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Running Loan</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">34040</h3>
                                    <i className="ti-calendar icon-md  mb-0 mb-md-3 mb-xl-0 text-info"></i>
                                </div>
                                <p className="mb-0 mt-2 text-danger">0.12% <span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Pending Loan</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">47033</h3>
                                    <i className="ti-user icon-md mb-0 mb-md-3 mb-xl-0 text-danger "></i>
                                </div>
                                <p className="mb-0 mt-2 text-danger">0.47% <span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Due Loan</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0 " >40016</h3>
                                    <i className="ti-agenda icon-md mb-0 mb-md-3 mb-xl-0 text-primary "></i>
                                </div>
                                <p className="mb-0 mt-2 text-success">64.00%<span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Paid Loan</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">61344</h3>
                                    <i className="ti-layers-alt icon-md mb-0 mb-md-3 mb-xl-0 text-warning "></i>
                                </div>
                                <p className="mb-0 mt-2 text-success">23.00%<span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Total DPS</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">34040</h3>
                                    <i className="ti-calendar icon-md  mb-0 mb-md-3 mb-xl-0 text-danger "></i>
                                </div>
                                <p className="mb-0 mt-2 text-danger">0.12% <span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Matured DPS</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">47033</h3>
                                    <i className="ti-user icon-md mb-0 mb-md-3 mb-xl-0 text-info"></i>
                                </div>
                                <p className="mb-0 mt-2 text-danger">0.47% <span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Due DPS</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0" >40016</h3>
                                    <i className="ti-agenda icon-md mb-0 mb-md-3 mb-xl-0 text-warning"></i>
                                </div>
                                <p className="mb-0 mt-2 text-success">64.00%<span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Running DPS</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">61344</h3>
                                    <i className="ti-layers-alt icon-md mb-0 mb-md-3 mb-xl-0 text-primary "></i>
                                </div>
                                <p className="mb-0 mt-2 text-success">23.00%<span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Total FDR</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">34040</h3>
                                    <i className="ti-calendar icon-md  mb-0 mb-md-3 mb-xl-0 text-info"></i>
                                </div>
                                <p className="mb-0 mt-2 text-danger">0.12% <span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Running FDR</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">47033</h3>
                                    <i className="ti-user icon-md mb-0 mb-md-3 mb-xl-0 text-danger "></i>
                                </div>
                                <p className="mb-0 mt-2 text-danger">0.47% <span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Due FDR</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0 " >40016</h3>
                                    <i className="ti-agenda icon-md mb-0 mb-md-3 mb-xl-0 text-primary "></i>
                                </div>
                                <p className="mb-0 mt-2 text-success">64.00%<span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title text-md-center text-xl-left">Closed FDR</p>
                                <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                    <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">61344</h3>
                                    <i className="ti-layers-alt icon-md mb-0 mb-md-3 mb-xl-0 text-warning "></i>
                                </div>
                                <p className="mb-0 mt-2 text-success">23.00%<span className="text-black ms-1"><small>(30 days)</small></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title">Sales details</p>
                                <p className="text-muted font-weight-light">Received overcame oh sensible so at an. Formed do change merely to county it. Am separate contempt domestic to to oh. On relation my so addition branched.</p>
                                <div id="sales-legend" className="chartjs-legend mt-4 mb-2"></div>
                                <canvas id="sales-chart"></canvas>
                            </div>
                            <div className="card border-right-0 border-left-0 border-bottom-0">
                                <div className="d-flex justify-content-center justify-content-md-end">
                                    <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                                        <button className="btn btn-lg btn-outline-light dropdown-toggle rounded-0 border-top-0 border-bottom-0" type="button" id="dropdownMenuDate2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                            Today
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate2">
                                            <a className="dropdown-item" href="#">January - March</a>
                                            <a className="dropdown-item" href="#">March - June</a>
                                            <a className="dropdown-item" href="#">June - August</a>
                                            <a className="dropdown-item" href="#">August - November</a>
                                        </div>
                                    </div>
                                    <button className="btn btn-lg btn-outline-light text-primary rounded-0 border-0 d-none d-md-block" type="button"> View all </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card border-bottom-0">
                            <div className="card-body pb-0">
                                <p className="card-title">Purchases</p>
                                <p className="text-muted font-weight-light">The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach a review</p>
                                <div className="d-flex flex-wrap mb-5">
                                    <div className="me-5 mt-3">
                                        <p className="text-muted">Status</p>
                                        <h3>362</h3>
                                    </div>
                                    <div className="me-5 mt-3">
                                        <p className="text-muted">New users</p>
                                        <h3>187</h3>
                                    </div>
                                    <div className="me-5 mt-3">
                                        <p className="text-muted">Chats</p>
                                        <h3>524</h3>
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-muted">Feedbacks</p>
                                        <h3>509</h3>
                                    </div>
                                </div>
                            </div>
                            <canvas id="order-chart" className="w-100"></canvas>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 grid-margin stretch-card">
                       <div className="card position-relative">
                         <div className="card-body">
                           <p className="card-title">Detailed Reports</p>
                            <div className="row">
                            <div className="col-md-12 col-xl-3 d-flex flex-column justify-content-center">
                                <div className="ml-xl-4">
                                    <h1>33500</h1>
                                    <h3 className="font-weight-light mb-xl-4">Sales</h3>
                                    <p className="text-muted mb-2 mb-xl-0">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc</p>
                                </div>  
                             </div>
                            </div>
                            <div className="col-md-12 col-xl-9">
                                <div className="row">
                                    <div className="col-md-6 mt-3 col-xl-5">
                                        <canvas id="north-america-chart"></canvas>
                                        <div id="north-america-legend"></div>
                                    </div>
                                    <div className="col-md-6 col-xl-7">
                                     <div className="table-responsive mb-3 mb-md-0">
                                         
                                     </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard