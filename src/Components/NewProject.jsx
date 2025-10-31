import Input from "./Input.jsx";

export default function NewProject() {
    return <div>
        <menu>
            <li><btton>Cancel</btton></li>
            <li><button>Save</button></li>
        </menu>
        <div>
           <Input label='Title' />
           <Input label='Description' textarea />
           <Input label='Due Date' />
        </div>
    </div>
}