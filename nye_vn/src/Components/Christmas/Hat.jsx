import React from 'react'


const Hat = ({img,class_name, alt}) => {
    return (
        <img src={img} className={class_name} alt={alt} />
    )
}


export default Hat; 