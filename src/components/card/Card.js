import React, { useEffect, useState } from 'react';
import BookSvg from '../icon/svg/BookSvg';
import OpenBookSvg from '../icon/svg/OpenBookSvg';
import { fatchMdData } from '../../utils/dataUtils';

const Card = ({ children, className, onOpen, isDetail, isdiabled, onClose, name, type = 'css' }) => {
    const [mdData, setMdData] = useState("")

    useEffect(() => {
        const getData = async () => {
            let data = await fatchMdData(type, name);
            setMdData(data)
        }
        if (isDetail) {
            getData()
        } else {
            setMdData("")
        }


    }, [isDetail, name, type])

    console.log('mdData', mdData);
    return (
        <div className={['card_div', className].join(" ")}>
            {isDetail && <i className={['icon', "open_icon"].join(" ")} onClick={onClose}><OpenBookSvg /></i>}
            {!isDetail && <i className={['icon', isdiabled ? 'disabled' : ''].join(" ")} onClick={onOpen}><BookSvg /></i>}
            {children}

        </div>
    );
};

export default Card;