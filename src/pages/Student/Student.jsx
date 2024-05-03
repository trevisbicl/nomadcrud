import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const Student = () => {
    const params = useParams()
    const [student,setStudent] = useState({})
    const getStudent = (id) => {
        axios(`http://localhost:4444/students?id=${id}`)
            .then(({data}) => setStudent(data[0]))
            .catch((err) => alert(err))
    }
    useEffect(() => {
        getStudent(params.id)
    },[params])
    return (
        <section className={"student"}>
            <div className="container">
                <img src={`../${student.img}`} alt=""/>
                <p>
                    {
                        student.name
                    }
                </p>
                <p>
                    email: {student.rating}
                </p>
            </div>
        </section>
    );
};

export default Student;