import React, {useState} from 'react';
import {TextBox} from './TextBox';
import './App.css';

// @ts-ignore
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
// @ts-ignore
import axios from "axios";

function Horoscope() {
    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rising, setRising] = useState("");
    const [horoscope, setHoroscope] = useState([]);

    const requestHoroscope = () => {
        const toSend = {
            sun : sun,
            moon : moon,
            rising : rising
        };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        axios.post("http://localhost:4567/horoscope", toSend, config)
            .then((response: { data: { [x: string]: React.SetStateAction<never[]>; }; }) => {
                console.log(response.data);
                setHoroscope(response.data['horoscope']);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
    return (
        <div>
            <h1 className="Horoscope-heading"> Horoscopes </h1>
            <TextBox label={"Sun Sign"} changeHandler={setSun}/>
            <TextBox label={"Moon Sign"} changeHandler={setMoon}/>
            <TextBox label={"Rising Sign"} changeHandler={setRising}/>
            <AwesomeButton type="primary" onPress={requestHoroscope}>Submit</AwesomeButton>
            <ul>
                {horoscope.map(item => <li>{item}</li>)}
            </ul>
        </div>
    );
}

export default Horoscope;