import { useEffect, useState } from 'react';
import ExtensionLists from './ExtensionLists';

const Content = () => {
    const [allData, setAllData] = useState([]);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [activeFilter, setActiveFilter] = useState("all");

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
        setActiveFilter(status);
        if (status === 'all') {
            setData(allData);
        } else if (status === 'active') {
            setData(allData.filter(d => d.isActive));
        } else if (status === 'inactive') {
            setData(allData.filter(d => !d.isActive));
        }
    };

    const handleToggle = (name, newStatus) => {
        setTimeout(() => {
            const updatedAllData = allData.map(ext =>
                ext.name === name ? { ...ext, isActive: newStatus } : ext
            );
            setAllData(updatedAllData);
            if (activeFilter === 'all') {
                setData(updatedAllData);
            } else if (activeFilter === 'active') {
                setData(updatedAllData.filter(ext => ext.isActive));
            } else if (activeFilter === 'inactive') {
                setData(updatedAllData.filter(ext => !ext.isActive));
            }

        }, 800);
    };


    const handleDelete = (name) => {
        const newLists = allData.filter(d => d.name !== name);
        setAllData(newLists);
        if (activeFilter === 'all') {
            setData(newLists);
        } else if (activeFilter === 'active') {
            setData(newLists.filter(ext => ext.isActive));
        } else if (activeFilter === 'inactive') {
            setData(newLists.filter(ext => !ext.isActive));
        }
    }


    return (
        <div className='w-3/4 max-md:w-5/6 h-screen' >

            <div className='flex max-sm:flex-col py-8 items-center justify-between'>
                <h1 className='text-xl font-bold text-darkblue dark:text-white'>Extensions List</h1>
                <div className="max-sm:my-4">

                    <button onClick={() => filterData("all")} className={`filter-btn ${activeFilter === "all" ? "filter-btn-active" : ""}`}>All</button>
                    <button onClick={() => filterData("active")} className={`filter-btn ${activeFilter === "active" ? "filter-btn-active" : ""}`}>Active</button>
                    <button onClick={() => filterData("inactive")} className={`filter-btn ${activeFilter === "inactive" ? "filter-btn-active" : ""}`}>Inactive</button>


                </div>
            </div>
            {error && <div>{error}</div>}
            <ExtensionLists data={data} onToggle={handleToggle} handleDelete={handleDelete} />
        </div>
    )
}

export default Content;