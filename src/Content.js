import data from "./data.json";

const Content = () => {

    return (
        <div className='w-3/4' >
            <div className='flex py-4 items-center justify-between'>
                <h1 className='text-lg font-bold'>Extensions List</h1>
                <div>
                    <button className='border border-neutral-400 hover:bg-red-300 px-3 py-1 rounded-full'>All</button>
                    <button className='border border-neutral-400 hover:bg-red-300 px-3 py-1 ml-2 rounded-full'>Active</button>
                    <button className='border border-neutral-400 hover:bg-red-300 px-3 py-1 ml-2 rounded-full'>Inactive</button>
                </div>
            </div>
            <div className='border-2 border-red-300 h-screen overflow-auto'>
                { data &&
                    data.map(ext => (
                        <div className="border-2 border-purple-400" key={ext.name}>
                            <img src={ext.logo} alt="logo" />
                            {ext.name}
                            {ext.description}

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Content;