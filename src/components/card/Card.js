import React from 'react';
import BookSvg from '../icon/svg/BookSvg';

const Card = ({children,className,onOpen,isDetail,isdiabled}) => {
    return (
        <div className={['card_div',className].join(" ")}>
            <i className={['icon',isdiabled?'disabled':''].join(" ")} onClick={onOpen}><BookSvg/></i>
            {children}
        </div>
    );
};

export default Card;