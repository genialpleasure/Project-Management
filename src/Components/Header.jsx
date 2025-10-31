import logo from '../assets/no-projects.png';

export default function Header() {
    return <div>
        <img className='w-16 h-16 object-contain mx-auto' src={logo} alt="management-logo" />
        <h1>Project Management</h1>
        <p></p>
    </div>
}