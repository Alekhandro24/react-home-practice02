import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { formatEventStart, formatEventDuration } from 'components/WCCONFERECE/utils';
import { iconSize } from 'components/WCCONFERECE/contants';
import { Card,EventName, Info, Chip } from './Event.syled';

export const Event = ({ name, location, speaker, type, start, end }) => {
    const formattedStart = formatEventStart(start);
    const duration = formatEventDuration(start, end)
    
    return <Card>
        <EventName>{name}</EventName>
        <Info>
            <i className="icon"></i>
            <FaMapMarkerAlt size={iconSize.sm} />
            {location}
        </Info>
        <Info>
            <i className="icon"></i>
            <FaUserAlt size={iconSize.sm}/>
            {speaker}
        </Info>
        <Info>
            <i className="icon"></i>
            <FaCalendarAlt size={iconSize.sm}/>
            {formattedStart}
        </Info>
        <Info>
            <i className="icon"></i>
            <FaClock size={iconSize.sm}/>
            {duration}
        </Info>
        <Chip eventType={type}>{ type}</Chip>
    </Card>
}
// className={`${css.chip} ${css[type]}`}

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
}