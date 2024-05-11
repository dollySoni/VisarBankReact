import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'semantic-ui-react';
import Pagination from '../../Pagination';

const Staff = () => {
    const [APIData, setAPIData] = useState([]);
    const [loading, setLoading] = useState(true);




    // Code for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const currentRecords = APIData.slice(indexOfFirstRecord,
        indexOfLastRecord);
    const nPages = Math.ceil(APIData.length / recordsPerPage)
    // Code for pagination

    // this code for get User Data
    useEffect(() => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((response) => {
                setAPIData(response.data);
            })
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))

    }, []);

    const getData = () => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
                setLoading(false);

            }).catch(() => { // Error handling: Displays an alert if there's an error fetching data
                alert('Error')
            })
    }
    // this code for get User Data

    // Create New User
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(checkbox);
        axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            alert('User Added Successfully');
            // history.push('/read')
        })


    }
    //Create New User
    // Update User
    const [id, setID] = useState(null);
    const setData = (data) => {
        console.log(data);
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const updateAPIData = () => {
        axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            // history.push('/read')
        })
    }

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <h5 className="my-2">All Staff</h5>
                    </div>
                    <div className="col-md-3 offset-md-3">
                        <div className="input-group my-2">
                            <input type="text" className="form-control" placeholder="Username" />
                            <button className="btn searchBtn px-3">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-2 my-2">
                        <button data-bs-toggle="modal" data-bs-target="#addNewUsers" className="btn addNewBtn">
                            <i className="fa-light fa-plus"></i> Add New
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 my-3">
                        <div className="card border-0 shadow-lg rounded-3">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th className="py-3">S.No</th>
                                                <th className="py-3">Username</th>
                                                <th className="py-3">Name</th>
                                                <th className="py-3">Email</th>
                                                <th className="py-3">Role</th>
                                                <th className="py-3">Status</th>
                                                <th className="py-3 text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentRecords.map((data, index) => {
                                                return (
                                                    <tr>
                                                        <td className="py-3">{index + 1}</td>
                                                        <td className="py-3">User</td>
                                                        <td className="py-3">{data.firstName} {data.lastName}</td>
                                                        <td className="py-3">{data.firstName}</td>
                                                        <td className="py-3">{data.firstName}</td>
                                                        <td className="">
                                                            <button className="btn btn-outline-success btn-sm rounded-pill" disabled>
                                                                Active
                                                            </button>
                                                        </td>
                                                        <td className="py-3 text-center">
                                                            <button data-bs-toggle="modal" onClick={() => setData(data)} data-bs-target="#editUsers"
                                                                className="btn btn-sm addNewBtn px-1 m-1">
                                                                <i className="fa-light fa-pen"></i> Edit
                                                            </button>
                                                            <button data-bs-toggle="modal" data-bs-target="#banUsers"
                                                                className="btn btn-sm btn-outline-danger px-1 m-1">
                                                                <i className="fa-regular fa-user-slash"></i> Ban
                                                            </button>
                                                            <button className="btn btn-sm btn-outline-dark px-1 m-1">
                                                                <i className="fa-sharp fa-light fa-right-to-bracket"></i>
                                                                Login
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                            }
                                        </tbody>
                                    </table>
                                    <Pagination
                                        nPages={nPages}
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="addNewUsers">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Add New Staff</h5>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <div className="my-2">
                                <label id="#name" >Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control mt-2" htmlFor="name" onChange={(e) => setFirstName(e.target.value)} />
                            </div>

                            <div className="my-2">
                                <label id="#Username" >Username <span className="text-danger">*</span></label>
                                <input type="text" className="form-control mt-2" htmlFor="Username" onChange={(e) => setLastName(e.target.value)} />
                            </div>

                            <div className="my-2">
                                <label id="#Email" >Email <span className="text-danger">*</span></label>
                                <input type="text" className="form-control mt-2" htmlFor="Email" />
                            </div>

                            <div className="my-2">
                                <label id="#Role" >Role <span className="text-danger">*</span></label>
                                <select className="form-select mt-2">
                                    <option>Select One</option>
                                    <option>Staff</option>
                                </select>
                            </div>

                            <div className="my-2">
                                <label className="mb-2" id="#UserPassword" >Password <span
                                    className="text-danger">*</span></label>
                                <div className="input-group">
                                    <input type="password" className="form-control" htmlFor="UserPassword" />
                                    <button className="btn" >
                                        Generate
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="w-100">
                                <button onClick={postData} type="submit" className="btn w-100 btn-lg searchBtn">
                                    <small >Submit</small>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editUsers" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Update Staff</h5>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <div className="my-2">
                                <label id="#name"
                                >Name <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    className="form-control mt-2"
                                    htmlFor="name"
                                    value={firstName} onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            <div className="my-2">
                                <label id="#Username"
                                >Username <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    className="form-control mt-2"
                                    htmlFor="Username"
                                    value={lastName} onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            <div className="my-2">
                                <label id="#Email"
                                >Email <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    className="form-control mt-2"
                                    htmlFor="Email"
                                    value="staff@site.com"
                                />
                            </div>

                            <div className="my-2">
                                <label id="#Role"
                                >Role <span className="text-danger">*</span></label>
                                <select className="form-select mt-2">
                                    <option>Select One</option>
                                    <option selected>Staff</option>
                                </select>
                            </div>

                            <div className="my-2">
                                <label className="mb-2" id="#UserPassword"
                                >Password <span className="text-danger">*</span></label>
                                <div className="input-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        htmlFor="UserPassword"
                                    />
                                    <button
                                        className="btn"
                                    >
                                        Generate
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="w-100">
                                <button type="submit" className="btn w-100 btn-lg searchBtn">
                                    <small >Submit</small>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="banUsers">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5>Confirmation Alert!</h5>
                            <button class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <span class="text-secondary">Are you sure to ban this staff?</span>
                        </div>
                        <div class="modal-footer">

                            <button data-bs-dismiss="modal" class="btn btn-sm searchBtn">
                                No
                            </button>
                            <button class="btn btn-sm searchBtn">Yes</button>

                        </div>
                    </div>
                </div>
            </div>
        
      
      </>
    );

}

export default Staff;