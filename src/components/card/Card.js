import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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


    return (
        <div className={['card_div', className].join(" ")}>
            {isDetail && <i className={['icon', "open_icon"].join(" ")} onClick={onClose}><OpenBookSvg /></i>}
            {!isDetail && <i className={['icon', isdiabled ? 'disabled' : ''].join(" ")} onClick={onOpen}><BookSvg /></i>}
            <div className='card-show'>
                {children}
            </div>

            {
                isDetail && <div className='card-markdown markdown-body '>
                    <ReactMarkdown children={mdData} remarkPlugins={[remarkGfm]} />
                </div>
            }

        </div>
    );
};

export default Card;