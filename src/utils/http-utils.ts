export type EmployeeApiRes = {
    "id": number,
    "name": string,
    "job_title": string,
    "department": string,
    "company_name": string,
    "experience_in_job": number,
}

export const API_URL = `https://my.api.mockaroo.com/employee.json?key=${import.meta.env.VITE_API_KEY}`;

export const fetchData = <T>(url: string): Promise<T> => {
    return fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP Error ${res.status}`);
            }
            return res.json();
        });
}