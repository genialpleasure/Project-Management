import logo from '../assets/no-projects.png';

export default function Header() {
    return <div className='w-[35rem] mt-16'>
        <img src={logo} alt="management-logo" />
        <h1>Project Management</h1>
        <p></p>
    </div>
}