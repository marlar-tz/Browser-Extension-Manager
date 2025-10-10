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
        } else {
            const newData = allData.filter(d => d.isActive === status);
            setData(newData);

        }
    };

    const handleToggle = (name ,newStatus) => {
        setTimeout(()=>{
            const updatedAllData = allData.map(ext => 
            ext.name === name ? {...ext, isActive: newStatus}:ext
        );
        setAllData(updatedAllData);
        // setData(prevData => {
        //     if(prevData.length === allData.length){
        //         return updatedAllData;
        //     }

        //     const isShowingActive = prevData.every(ext =>ext.isActive === true);
        //     const isShowingInactive = prevData.every(ext=> ext.isActive === false);

        //     if(isShowingActive){
        //         return updatedAllData.filter(ext => ext.isActive ===true);
        //     }else if(isShowingInactive){
        //         return updatedAllData.filter(ext => ext.isActive ===false);
        //     }else{
        //         return updatedAllData;
        //     }
        // });
         if (activeFilter === 'all') {
                setData(updatedAllData);
            } else if (activeFilter === true || activeFilter === 'active') {
                setData(updatedAllData.filter(ext => ext.isActive));
            } else if (activeFilter === false || activeFilter === 'inactive') {
                setData(updatedAllData.filter(ext => !ext.isActive));
            }

        },800);  
    };


    const handleDelete =(name) => {
        const newLists = allData.filter(d =>d.name !== name);
        setAllData(newLists);
        if (activeFilter === 'all') {
                setData(newLists);
            } else if (activeFilter === true || activeFilter === 'active') {
                setData(newLists.filter(ext => ext.isActive));
            } else if (activeFilter === false || activeFilter === 'inactive') {
                setData(newLists.filter(ext => !ext.isActive));
            }
    }



    return (
        <div className='w-3/4 max-md:w-5/6 h-screen' >

            <div className='flex max-sm:flex-col py-4 items-center justify-between'>
                <h1 className='text-xl font-bold '>Extensions List</h1>
                <div className="max-sm:my-4">

                    <button onClick={() => filterData("all")} className={`border border-neutral-400 hover:bg-red-300 px-3 py-1 rounded-full max-sm:mr-2 ${activeFilter === "all" ? "bg-red-300" : ""}`}>All</button>
                    <button onClick={() => filterData(true)} className={`border border-neutral-400 hover:bg-red-300 px-3 py-1 ml-2 rounded-full max-sm:mr-2 ${activeFilter === true ? "bg-red-300" : ""}`}>Active</button>
                    <button onClick={() => filterData(false)} className={`border border-neutral-400 hover:bg-red-300 px-3 py-1 ml-2 rounded-full ${activeFilter === false ? "bg-red-300" : ""}`}>Inactive</button>


                </div>
            </div>
            {error && <div>{error}</div>}
            <ExtensionLists data={data} onToggle={handleToggle} handleDelete={handleDelete} />
        </div>
    )
}

export default Content;