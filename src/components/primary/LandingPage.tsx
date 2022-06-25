import React, {useEffect, useState} from 'react';
import { Navigate } from "react-router-dom";
import axios from 'axios'

interface Props {
	setLoading: (value: boolean) => void;
}

export default (props: Props) => {

    const {setLoading} = props;

    const [route, setRoute] = useState("");

    useEffect(() => {

        setLoading(false)

        axios.get('http://localhost:8000/api/_/sign-in').then((response) => {
            if (response.status === 200)
                setRoute("sign-in")
            else if (response.status === 401)
                setRoute("dashboard")
        }).catch(function (error) {
            setRoute("error/500")
        })

    }, []);

    return <Navigate to={route}/>
}
