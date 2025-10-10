import { useEffect, useState } from 'react';
import ExtensionLists from './ExtensionLists';

const Content = () => {
    const [allData, setAllData] = useState([]);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('/data.json')
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data from that resource');
                }
                return res.json()
            })
            .then(fetchData => {
                setAllData(fetchData);
                setData(fetchData);
                console.log(Object.keys(fetchData).length);
            })
            .catch(err => {
                setError(err.message)
            })
    }, []);

    const filterData = (status) => {
        if (status === 'all') {
            setData(allData);
        } else {
            const newData = allData.filter(d => d.isActive === status);
            setData(newData);

        }
    };

    const handleToggle = (name ,newStatus) => {
        const updatedAllData = allData.map(ext => 
            ext.name === name ? {...ext, isActive: newStatus}:ext
        );
        
        setData(updatedAllData);
        setAllData(updatedAllData);
        
    };



    return (
        <div className='w-3/4 max-md:w-5/6 h-screen' >

            <div className='flex max-sm:flex-col py-4 items-center justify-between'>
                <h1 className='text-xl font-bold '>Extensions List</h1>
                <div className="max-sm:my-4">

                    <button onClick={() => filterData("all")} className='border border-neutral-400 hover:bg-red-300 px-3 py-1 rounded-full max-sm:mr-2 '>All</button>
                    <button onClick={() => filterData(true)} className='border border-neutral-400 hover:bg-red-300 px-3 py-1 ml-2 rounded-full max-sm:mr-2'>Active</button>
                    <button onClick={() => filterData(false)} className='border border-neutral-400 hover:bg-red-300 px-3 py-1 ml-2 rounded-full'>Inactive</button>


                </div>
            </div>
            {error && <div>{error}</div>}
            <ExtensionLists data={data} onToggle={handleToggle} />
        </div>
    )
}

export default Content;