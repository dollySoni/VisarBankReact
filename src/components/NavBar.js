import React from 'react'
import Dasboard from './Pages/Dashboard'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

export default function NavBar()
{
    return(
      
    <nav className="sidebar sidebar-offcanvas"  id="sidebar">
    <Router>

          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="Dashboard">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">Dashboard</span>
               
              </Link>
            </li>
            <li className="nav-item"> 
              <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">Manage Staff </span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className="nav-link" to="Staff">All Staff</Link></li>
                  <li className="nav-item"> <a className="nav-link" href="roles.html">Roles</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic1" aria-expanded="false" aria-controls="ui-basic1">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">Manage Users</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="ui-basic1">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="users.html">Users</a></li>
                  <li className="nav-item"> <a className="nav-link" href="withbalance.html">With Balance</a></li>
                  <li className="nav-item"> <a className="nav-link" href="allusers.html">All Users</a></li>
                  <li className="nav-item"> <a className="nav-link" href="notificationtoall.html">Notification to All</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic2" aria-expanded="false" aria-controls="ui-basic2">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">Plans</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="ui-basic2">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="fdrplans.html">FDR Plans</a></li>
                  <li className="nav-item"> <a className="nav-link" href="dpsplans.html">DPS Plans</a></li>
                  <li className="nav-item"> <a className="nav-link" href="loanplans.html">Loans Plans</a></li>
                
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic3" aria-expanded="false" aria-controls="ui-basic3">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">Manage Branches</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="ui-basic3">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="allbranches.html">All Branches</a></li>
                  <li className="nav-item"> <a className="nav-link" href="branchstaff.html">Branch Staff</a></li>
                </ul>
              </div>
            </li>
          
            <li className="nav-item">
              <a className="nav-link" href="otherbanks.html">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">Other banks</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">Wire Transfer</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="auth">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="setting.html">Setting</a></li>
                </ul>
              </div>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="deposits.html">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">Deposits</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="withdrawals.html">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">Withdrawals</span>
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#auth9" aria-expanded="false" aria-controls="auth">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">Money Transfers</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="auth9">
                <ul className="nav flex-column sub-menu">
                
                  <li className="nav-item"> <a className="nav-link" href="ownbanktransfer.html">Own Bank Transfer</a></li>
              
                  <li className="nav-item"> <a className="nav-link" href="otherbanktransfer.html">Other Bank Transfer</a></li>
                
              
                </ul>
              </div>
            </li>
          
            <li className="nav-item">
              <a className="nav-link" href="fdr.html">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">FDR</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="dps.html">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">DPS</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Loan.html">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">Loan</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="loancalculator.html">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">Loan Calculator</span>
              </a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#auth6" aria-expanded="false" aria-controls="auth">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">Payment Gateways</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="auth6">
                <ul className="nav flex-column sub-menu">
                
                  <li className="nav-item"> <a className="nav-link" href="automaticgateway.html">Automatic Gateways</a></li>
                  <li className="nav-item"> <a className="nav-link" href="manualgateway.html">Manual Gateways</a></li>
                
                  
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="supportticket.html">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">Support Ticket</span>
              </a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#auth10" aria-expanded="false" aria-controls="auth">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">Report</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="auth10">
                <ul className="nav flex-column sub-menu">
                
                  <li className="nav-item"> <a className="nav-link" href="transationlog.html">Transaction log</a></li>
                  <li className="nav-item"> <a className="nav-link" href="loginhistory.html">Login History</a></li>
                  <li className="nav-item"> <a className="nav-link" href="notificationhistory.html">Notification History</a></li>
                </ul>
              </div>
            </li>
          
          </ul>
          </Router>

        </nav>
    )
}