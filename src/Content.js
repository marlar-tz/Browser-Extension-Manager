import data from "./data.json";

const Content = () => {

    return (
        <div className='w-3/4 max-md:w-5/6 h-screen' >
            <div className='flex py-4 items-center justify-between'>
                <h1 className='text-lg font-bold'>Extensions List</h1>
                <div>
                    <button className='border border-neutral-400 hover:bg-red-300 px-3 py-1 rounded-full'>All</button>
                    <button className='border border-neutral-400 hover:bg-red-300 px-3 py-1 ml-2 rounded-full'>Active</button>
                    <button className='border border-neutral-400 hover:bg-red-300 px-3 py-1 ml-2 rounded-full'>Inactive</button>
                </div>
            </div>
            <div className='grid grid-cols-3 max-md:grid-cols-2 gap-x-4'>
                {data &&
                    data.map(ext => (
                        <div className="border-2 border-purple-400 flex flex-col px-3 py-3 h-48 mb-4" key={ext.name}>
                            <div className='flex mb-8 max-md:mb-8 h-36'>
                                <img className='object-scale-down flex items-center' src={ext.logo} alt="logo" />
                                <div className='flex flex-col justify-center'>
                                    <p>{ext.name}</p>
                                    <p>{ext.description}</p>
                                    
                                </div>
                            </div>
                            <div className='flex justify-between px-3'>
                                <button className='border border-green-400 px-2 py-1 rounded-full'>Remove</button>
                                <button>Scroll bar</button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Content;