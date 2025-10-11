// import { useState } from 'react';
const ExtensionLists = ( {data , onToggle , handleDelete }) => {

    // const data = props.data;
    // const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event,name) => {
        const checked = event.target.checked;
        onToggle(name,checked);
        

    };



    return (
        <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-4'>
            {data &&
                data.map(ext => (

                    <div className="border-2 border-purple-400 flex flex-col px-3 h-42 mb-4" key={ext.name}>
                        <div className='flex justify-center items-start h-36 pt-4 px-3'>
                            <img className='object-scale-down' src={ext.logo} alt="logo" />
                            <div className='ml-2'>
                                <p className="text-darkblue font-bold text-lg">{ext.name}</p>
                                <p>{ext.description}</p>

                            </div>
                        </div>
                        <div className='flex justify-between items-center px-3 mb-4'>
                            <button className='border border-green-400 py-1 px-2 rounded-full hover:bg-green-300' onClick={()=>handleDelete(ext.name)}>Remove</button>
                            <input className="switch" type="checkbox" defaultChecked={ext.isActive} onChange={(e)=> handleSubmit(e,ext.name)} />


                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default ExtensionLists;