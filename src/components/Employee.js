import axios from 'axios';
import React, { useEffect, useState, useContext  } from 'react';

import myImage from '../images/loader.gif';

import * as myConstant from '../constant/constant';

import {getAllEmployee, createEmp, getEMployeById} from '../service/employeeService';
import{ Appcontext } from '../App'


const Employee = () => { 
    const contextObj =  useContext(Appcontext)
    const apiEndPoint = process.env.REACT_APP_API_END_POINT;
    const APPvERSION = process.env.REACT_APP_VERSION;
    debugger; 
    let [employeeList, setEmployeeLIst] = useState([]); 
    let [employeeObj, setEmployeeObj] = useState({
        "empId": 0,
        "empName": "",
        "empContactNo": "",
        "empAltContactNo": "",
        "empEmail": "",
        "addressLine1": "",
        "addressLine2": "",
        "pincode": "",
        "city": "",
        "state": "",
        "bankName": "",
        "ifsc": "",
        "accountNo": "",
        "bankBranch": "",
        "salary": 0
    })
    let [isLoader, setIsLoader] = useState(true);
    let [isSaveLoader, setisSaveLoader] = useState(false);

    useEffect(() => {
        getEmployeeList();
    }, []) 
    const reset =() => {
        setEmployeeObj({
            "empId": 0,
            "empName": "",
            "empContactNo": "",
            "empAltContactNo": "",
            "empEmail": "",
            "addressLine1": "",
            "addressLine2": "",
            "pincode": "",
            "city": "",
            "state": "",
            "bankName": "",
            "ifsc": "",
            "accountNo": "",
            "bankBranch": "",
            "salary": 0
        })
    }
    const changeFormValue = (event, key) => {
        setEmployeeObj(prevObj => ({ ...prevObj, [key]: event.target.value }))
    } 
    const getEmployeeList = async () => {
         debugger
         getAllEmployee().then((res)=>{
            debugger
            setIsLoader(false)
            setEmployeeLIst(res.data)
         })
       
    } 
    const saveEmployee = async () => {
        setisSaveLoader(true);
        try {
            debugger;
            createEmp(employeeObj).then((res)=>{
                debugger;
                setisSaveLoader(false);
                if (res.result) {
                    alert('Employee Created');
                    getEmployeeList();
                } else {
                    alert(res.message)
                }
            })
             
           
        } catch (error) {
            setisSaveLoader(false);
            debugger;
            alert(error.code)
        }
        
    } 
    const onEdit = async (id) => {

        try {
            getEMployeById(id).then((res)=>{
                setEmployeeObj(res.data)
            })
            
            
        } catch (error) {
                alert('Error Occuored');
        }

        
    } 
    const updateEmployee = async () => {
        const result = await axios.post(apiEndPoint + 'UpdateEmployee', employeeObj);
        if (result.data.result) {
            alert('Employee Updated');
            getEmployeeList();
        } else {
            alert(result.data.message)
        }
    } 
    const onDelete = async (id) => {
        const isDelte = window.confirm('Are You Sure want to Delete');
        if (isDelte) {
            const result = await axios.get(apiEndPoint + 'DeleteEmployeeByEmpId?empid=' + id);
            if (result.data.result) {
                alert('Employee Deleted');
                getEmployeeList();
            } else {
                alert(result.data.message)
            }
        }

    }
    return (
        <div>
            <p>Version: {contextObj.appVersion} , CreateBy: {contextObj.craetedBy}</p>
            <div className='row'>
                <div className='col-8'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            Employee List
                        </div>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Sr No</th>
                                        <th>Name</th>
                                        <th>Contact No</th>
                                        <th>Email</th>
                                        <th>City</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {
                                    isLoader && <tbody>
                                        <tr>
                                            <td colSpan='6' className="text-center">
                                                <img src={myImage} />
                                            </td>
                                        </tr>
                                    </tbody>
                                }
                                {
                                    !isLoader && <tbody>
                                        {
                                            employeeList.map((item, index) => {
                                                return (<tr>
                                                    <td>{index + 1} </td>
                                                    <td> {item.empName} </td>
                                                    <td> {item.empContactNo}</td>
                                                    <td>{item.empEmail} </td>
                                                    <td>{item.city} </td>
                                                    <td>
                                                        <button className='btn btn-sm btn-primary' onClick={() => { onEdit(item.empId) }} > Edit</button>
                                                        <button className='btn btn-sm btn-danger' onClick={() => { onDelete(item.empId) }}> Delete</button>
                                                    </td>
                                                </tr>)
                                            })
                                        }

                                    </tbody>
                                }


                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            New Employee
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-6'>
                                    <label>Name</label>
                                    <input type='text' value={employeeObj.empName} onChange={(event) => { changeFormValue(event, 'empName') }} className='form-control' />
                                </div>
                                <div className='col-6'>
                                    <label>Contact No</label>
                                    <input type='text' value={employeeObj.empContactNo} onChange={(event) => { changeFormValue(event, 'empContactNo') }} className='form-control' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <label>Alt Contact</label>
                                    <input type='text' value={employeeObj.empAltContactNo} onChange={(event) => { changeFormValue(event, 'empAltContactNo') }} className='form-control' />
                                </div>
                                <div className='col-6'>
                                    <label>Email</label>
                                    <input type='text' value={employeeObj.empEmail} onChange={(event) => { changeFormValue(event, 'empEmail') }} className='form-control' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-4'>
                                    <label>Pin Code</label>
                                    <input type='text' value={employeeObj.pincode} onChange={(event) => { changeFormValue(event, 'pincode') }} className='form-control' />
                                </div>
                                <div className='col-4'>
                                    <label>City</label>
                                    <input type='text' value={employeeObj.city} onChange={(event) => { changeFormValue(event, 'city') }} className='form-control' />
                                </div>
                                <div className='col-4'>
                                    <label>State</label>
                                    <input type='text' value={employeeObj.state} onChange={(event) => { changeFormValue(event, 'state') }} className='form-control' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <label>Address Line 1</label>
                                    <textarea className='form-control' value={employeeObj.addressLine1} onChange={(event) => { changeFormValue(event, 'addressLine1') }} ></textarea>
                                </div>
                                <div className='col-6'>
                                    <label>Address Line 2</label>
                                    <textarea className='form-control' value={employeeObj.addressLine2} onChange={(event) => { changeFormValue(event, 'addressLine2') }}  ></textarea>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <label>Bank Name</label>
                                    <input type='text' value={employeeObj.bankName} className='form-control' onChange={(event) => { changeFormValue(event, 'bankName') }} />
                                </div>
                                <div className='col-6'>
                                    <label>Acc No</label>
                                    <input type='text' value={employeeObj.accountNo} className='form-control' onChange={(event) => { changeFormValue(event, 'accountNo') }} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <label>IFSC </label>
                                    <input type='text' value={employeeObj.ifsc} className='form-control' onChange={(event) => { changeFormValue(event, 'ifsc') }} />
                                </div>
                                <div className='col-6'>
                                    <label>Branch</label>
                                    <input type='text' value={employeeObj.bankBranch} className='form-control' onChange={(event) => { changeFormValue(event, 'bankBranch') }} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <label>Salary </label>
                                    <input type='text' value={employeeObj.salary} className='form-control' onChange={(event) => { changeFormValue(event, 'salary') }} />
                                </div>
                            </div>
                            <div className='row pt-2'>
                                <div className='col-6 text-center'>
                                    <button className='btn btn-sm btn-success' onClick={reset}> Reset</button>
                                </div>
                                <div className='col-6 text-center'>
                                    {
                                        employeeObj.empId == 0 && <button className='btn btn-sm btn-success' onClick={saveEmployee}>
                                             {isSaveLoader && <span class="spinner-border spinner-border-sm"></span>} 
                                             Save Employee</button>
                                    }
                                    {
                                        employeeObj.empId !== 0 && <button className='btn btn-sm btn-warning' onClick={updateEmployee}> Update Employee</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee;