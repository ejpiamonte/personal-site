import React, { useState } from "react";
import "./SalaryCalculator.css";

const SalaryCalcu = () => {
    const [salary, setSalary] = useState ("");
    const [workDays, setWorkDays] = useState ("");
    const [workHours, setWorkHours] = useState ("");
    const [dailyPay, setDailyPay] = useState ("");
    const [hourlyPay, setHourlyPay] = useState ("");

    const calculatePay = () => {
        let dailyPayValue = "";
        let hourlyPayValue = "";

        if (!salary || !workDays || !workHours){
            dailyPayValue = "Please fill out all fields";
            hourlyPayValue = "Please fill out all fields";
        } else if (salary < 0 || workDays < 0 || workHours < 0){
            dailyPayValue = "Invalid! negative not allowed";
            hourlyPayValue = "Invalid! negative not allowed";
        } else if (workDays > 30 || workHours > 24){
            dailyPayValue = "Invalid! work hours cannot exceed 24 hours";
            hourlyPayValue = "Invalid! work days cannot exceed 30 days";
        } else {
            dailyPayValue = (salary / workDays).toFixed(2);
            hourlyPayValue = (salary / workDays / workHours).toFixed(2);
        }

        setDailyPay(dailyPayValue);
        setHourlyPay(hourlyPayValue);
    };

    return (
        <div className='calculator-container'>
            <div className='calculator'>
                <h2>Hourly &amp; Daily Pay Calculator</h2>
                <div className='input-group'>
                    <label htmlFor="salary-input">Basic Monthly Salary (PHP) </label>
                    <input type='number' id='salary-input' value={salary} onChange={(e) => setSalary(e.target.value)} 
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor="work-days-input">work days per month</label>
                    <input type='number' id='work-days-input' value={workDays} onChange={(e) => setWorkDays(e.target.value)} 
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor="work-hours-input">work hours per day</label>
                    <input type='number' id='work-hours-input' value={workHours} onChange={(e) => setWorkHours(e.target.value)} 
                    />
                </div>
                <div className='button-group'>
                    <button onClick={calculatePay}>Calculate</button>
                </div>
                <div className='output-group'>
                    <p>daily pay: {dailyPay}</p>
                    <p>hourly pay: {hourlyPay}</p>
                </div>
            </div>
        </div>
    );
};

export default SalaryCalcu;