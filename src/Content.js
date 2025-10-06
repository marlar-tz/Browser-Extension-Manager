import data from "./data.json";

const Content = () => {

    return (
        <div className='w-3/4 max-md:w-5/6 h-screen' >
            <div className='flex max-sm:flex-col py-4 items-center justify-between'>
                <h1 className='text-xl font-bold '>Extensions List</h1>
                <div className="max-sm:my-4">
                    <button className='border border-neutral-400 hover:bg-red-300 px-3 py-1 rounded-full max-sm:mr-2 '>All</button>
                    <button className='border border-neutral-400 hover:bg-red-300 px-3 py-1 ml-2 rounded-full max-sm:mr-2'>Active</button>
                    <button className='border border-neutral-400 hover:bg-red-300 px-3 py-1 ml-2 rounded-full'>Inactive</button>
                </div>
            </div>
            <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-4'>
                {data &&
                    data.map(ext => (
                        <div className="border-2 border-purple-400 flex flex-col px-3 h-42 mb-4" key={ext.name}>
                            <div className='flex justify-center items-start h-36 pt-4 px-3'>
                                <img className='object-scale-down' src={ext.logo} alt="logo" />
                                <div className='ml-2'>
                                    <p>{ext.name}</p>
                                    <p>{ext.description}</p>

                                </div>
                            </div>
                            <div className='flex justify-between px-3 mb-4'>
                                <button className='border border-green-400 py-1 px-2 rounded-full'>Remove</button>
                                <input type="text" />
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Content;