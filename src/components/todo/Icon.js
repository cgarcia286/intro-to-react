import '../../static/css/todo/Icon.css';
import { ReactComponent as CheckSVG } from '../../static/svg/check.svg';
import { ReactComponent as DeleteSVG } from '../../static/svg/delete.svg';

const iconType = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />
}

function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={ `Icon-container  Icon-container-${type}` }
      onClick={onClick}
    >
      {iconType[type](color)}
    </span>
  )
}

export { TodoIcon };
