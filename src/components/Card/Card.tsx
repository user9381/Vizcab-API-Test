import { useEffect, useState } from 'react';
import { API_URL } from '../../utils/http-utils';
import { Employees } from '../../utils/Employees';
import CardList from './CardList';
import './Card.css';

function Card() {
    const [employees, setEmployees] = useState<Array<Employees>>([]);
    const [fetchError, setFetchError] = useState<string | null>(null);

    useEffect(() => {
        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setEmployees(data))
            .catch((error) => {
                setFetchError(`Problème avec le fetch : ${error}`);
            });
    }, []);

    return (
        <div className='card'>
            <h1>Employees</h1>
            {fetchError ? (
                <p>Une erreur s'est produite : {fetchError}</p>
            ) : (
                <CardList employees={employees} />
            )}
        </div>
    );
}

export default Card;