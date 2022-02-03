import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'

interface IconButtonProps {
    icon: IconDefinition;
}


function IconButton({ icon }: IconButtonProps) {
    return (
        <button className="icon-button">
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}

export default IconButton
