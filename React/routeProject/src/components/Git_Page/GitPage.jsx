import React  from 'react';
import { useLoaderData } from 'react-router-dom';


export default function GitPage() {
    const data = useLoaderData()
    return (
        <>
            <div className='text-center bg-gray-700 text-white font-semibold p-5 m-4'>
                <h1 className='text-2xl'> Github Id: {data.login}</h1>
                <img src={data.avatar_url} alt="" />
            </div>
        </>
    );
};

export const githubData = async () =>{
    const response = await fetch('https://api.github.com/users/sahilghadi47')
    return response.json()
}

