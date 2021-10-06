import React from 'react'

import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar';
const Students = () => {
    return (
        <div className="container">
            <div className="py-4">
                <div className="row">
                    {
                        new Array(12).fill("").map((item, i) => (
                            <div className="col-lg-3 col-md-6 mb-4" key={i}>
                                <div className="card shadow text-center py-4">
                                    <Avatar url={`https://i.pravatar.cc/150?img=${i + 1}`} />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">Student Name</h5>
                                        <p className="text-muted small">Student E-mail</p>
                                        <Link to={`/student/${i}`} className="btn btn-primary btn-profile">
                                            View Profile
                                        </Link>
                                        <button className="btn btn-edit">
                                            <span className="material-icons">delete_outline</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Students
