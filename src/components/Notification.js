import React, { useState,useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Modal, Button } from 'react-bootstrap';


const Notification = () => {
    const [rows, setRows] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [serviceCenter, setServiceCenter] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [VehiclePart, setVehiclePart] = useState("");
    async function fetchRowDetails() {
        let collName=localStorage.getItem("emp_id");
        const response = await fetch(`http://localhost:5000/api/notify-details/row-details/${collName}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        });
        let data = await response.json();
        setRows(data);
    }
    let mainStyle = {
        width: '82%',
        margin: '30px',
        position: 'fixed',
        left: '235px',
        height: '85%'
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const newRow = {
            id: rows.length + 1,
            serviceCenter: serviceCenter,
            date: date,
            category: category,
            vehiclePart: VehiclePart
        };
        setRows(prevRows => [...prevRows, newRow]);

        let collName=localStorage.getItem("emp_id");
        const response = await fetch(`http://localhost:5000/api/notify-details/notify-details`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                serviceCenter: serviceCenter,
                date: date,
                category: category,
                vehiclePart: VehiclePart,
                collName: collName,
            }),
        });

    }
    let sendNotification = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/notify/send-sms", {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    to: "+916302691478",
                    body: "Hey please make your insurance , service , pollution checking done..."
                })
            });
            const json = await response.json();
            console.log(json);
        }
        catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        fetchRowDetails();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="d-flex">
                <Sidebar />
                <div style={mainStyle}>
                    <div className='d-flex'>
                        <Button variant="success" onClick={handleShowModal}>
                            Feed Data
                        </Button>
                        <Modal show={showModal} onHide={handleCloseModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Enter your recent vehicle-service details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Service Center</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" value={serviceCenter}
                                        onChange={(e) => setServiceCenter(e.target.value)}
                                        placeholder="Service Center" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
                                    <input type="date" className="form-control" id="exampleFormControlInput1" value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        placeholder="Date" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Category</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        placeholder="Category" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Vehicle Part (If any part damaged..)</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" value={VehiclePart}
                                        onChange={(e) => setVehiclePart(e.target.value)}
                                        placeholder="Vehicle Part" />
                                </div>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseModal}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleOnSubmit}>Submit</Button>
                            </Modal.Footer>
                        </Modal>

                        <div style={{ marginLeft: "1015px" }}>
                            <button className='btn btn-success ' onClick={sendNotification}>
                                Send notification
                            </button>
                        </div>
                    </div>

                    <table className="table table-success table-striped" style={{ marginTop: "40px" }}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Service Center</th>
                                <th scope="col">Date</th>
                                <th scope="col">Category</th>
                                <th scope="col">Vehicle Part</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row,index) => (
                                <tr key={row.id}>
                                    <th scope="row">{index+1}</th>
                                    <td>{row.serviceCenter}</td>
                                    <td>{row.date}</td>
                                    <td>{row.category}</td>
                                    <td>{row.vehiclePart}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Notification;