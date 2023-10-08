import { EmployeeApiRes } from '../../utils/http-utils';
import './Card.css';
import CardItem from './CardItem';

type EmployeesProps = {
    employees: Array<EmployeeApiRes>;
}

function CardList({ employees }: EmployeesProps) {
    return (
        <div className='card-list'>
            {employees.map((employee) => <CardItem employees={employee} />)}
        </div>
    );
}

export default CardList;