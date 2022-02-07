import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'

interface IconButtonProps {
    icon: IconDefinition;
    onClick: React.MouseEventHandler
}


function IconButton({ icon, onClick }: IconButtonProps) {
    return (
        <button onClick={onClick} className="icon-button">
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}

export default IconButton
