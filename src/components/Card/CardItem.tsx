import { useEffect, useRef } from 'react';
import { EmployeeApiRes } from '../../utils/http-utils';
import './Card.css';
import icon from '../../assets/icon-user.svg';

type EmployeesProps = {
    employees: EmployeeApiRes;
}

function CardItem({ employees }: EmployeesProps) {
    const progressBarRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const progressBar = progressBarRef.current;
        if (progressBar) {
            progressBar.style.width = (employees.experience_in_job * 10) + "%";
        }
    }, [employees.experience_in_job]);

    return (
        <div className='employee-card'>
            <div className='card-header'>
                <img className='avatar' src={icon} alt='avatar icon card' loading="lazy" />
            </div>
            <div className='card-body'>
                <p className='employee-name'>{employees.name}</p>
                <p>{employees.job_title} / {employees.department}</p>
                <p>{employees.company_name}</p>
                <div className="progress-container">
                    <p className='experience-job'>{employees.experience_in_job}/10</p>
                    <div className="progress-bar" ref={progressBarRef}></div>
                </div>
            </div>
        </div>
    );
}

export default CardItem;