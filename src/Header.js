import logo from './assets/images/logo.svg'
import sun from './assets/images/icon-sun.svg'

const Header = () => {
    return (
        <div className='flex items-center justify-between w-3/4 h-16 bg-blue-400 rounded-lg'>
            <img className='ml-4' src={logo} alt="logo" />
            <button>
                <img className='mr-4 p-2 bg-red-400 rounded-lg' src={sun} alt="sun" />
            </button>
        </div>
    )
}

export default Header;