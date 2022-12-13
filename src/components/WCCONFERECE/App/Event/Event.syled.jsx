import styled from '@emotion/styled';

export const Card = styled.div`
    position: relative;
    border: ${props => `2px dashed ${props.theme.colors.black}`};
    padding: ${props => props.theme.spacing}px;
    
    border-radius: 4px;
`;
// padding: ${props => props.theme.spacing(2)};

export const EventName = styled.h2`
    margin-top: 0;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`;

export const Info = styled.p`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 8px;
    color: var(--color-primary-text);
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.25px;

    svg {
        dispay: block;
        margin - right: 8px;
        color: var(--color - secondary - text);
    }
`;

export const Chip = styled.span`
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    
    color: #fff;

    background-color: ${({eventType, theme}) => {
    switch (eventType) {
        case 'free':
            return theme.colors.green;
        case 'paid':
            return theme.colors.blue;
        case 'vip':
            return theme.colors.red;
        default:
            return '#000';
    }
    }};
`;

// ------variation2-----------
/////////////////////////////////
// const setBgColor = props => {
//     switch (props.eventType) {
//         case 'free':
//             return 'var(--color-green)';
//         case 'paid':
//             return 'var(--color-blue)';
//         case 'vip':
//             return 'var(--color-red)';
//         default:
//             return '#000';
//     }
// };

// export const Chip2 = styled.span`
//     position: absolute;
//     top: 4px;
//     right: 4px;
//     padding: 4px 8px;
//     border-radius: 4px;
//     text-transform: uppercase;
    
//     color: #fff;

//     background-color: ${setBgColor};
// `;



