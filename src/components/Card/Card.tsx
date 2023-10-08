import { useEffect, useState } from 'react';
import ErrorHandler from './ErrorHandler/ErrorHandler';
import { API_URL, fetchData, EmployeeApiRes } from '../../utils/http-utils';
import CardList from './CardList';
import './Card.css';

function Card() {
    const [employees, setEmployees] = useState<Array<EmployeeApiRes>>([]);
    const [error, setError] = useState<string | undefined>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData<Array<EmployeeApiRes>>(API_URL)
            .then((data) => {
                setEmployees(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message.toString());
                setIsLoading(false);
            });
    }, []);

    return (
        <div className='card'>
            {isLoading ? (
                <div id='loading'>
                    <h1>Loading...</h1>
                </div>
            ) : (
               <>
                    {!error ? (
                        <>
                            <h1>Employees</h1>
                            <CardList employees={employees} />
                        </>
                    ) : (
                        <ErrorHandler error={error} />
                    )}
                </>
            )}
        </div>
    );
}

export default Card;