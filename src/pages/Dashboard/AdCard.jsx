import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const AdCard = ({ ad, handleUpdate, handleDelete }) => {
    const { name, status, id } = ad

    return (
        <div className="flex items-center justify-between gap-6 bg-tertiary h-24 w-3/5 px-6 py-2 rounded-lg shadow-sm">
            <span className="flex gap-10">
                <p className="font-bold">{name}</p>
                <p
                    className={`${
                        status === 'active' ? 'text-green-600' : 'text-red-500'
                    } font-semibold`}>
                    {status}
                </p>
            </span>
            <span className="flex gap-10">
                <FontAwesomeIcon
                    icon={faEdit}
                    className="cursor-pointer hover:text-secondary"
                    onClick={() => handleUpdate(id)}
                />
                <FontAwesomeIcon
                    icon={faTrash}
                    className="cursor-pointer text-red-500"
                    onClick={() => handleDelete(id)}
                />
            </span>
        </div>
    )
}

export default AdCard