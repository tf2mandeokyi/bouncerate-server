import React from 'react'

import './index.scss'


type Props = {
    id: number;
    children: React.ReactNode;
} | {
    entity: { id: number, name: string }
}

const NameAndId : React.FC<Props> = (props) => {
    if('entity' in props) {
        let { id, name } = props.entity;
        return NameAndId({ id, children: <>{ name }</> });
    } else return (
        <div className='name-and-id'>
            <div className='name'>{ props.children }</div>
            <div className='id'>#{ props.id }</div>
        </div>
    )
}

export default NameAndId