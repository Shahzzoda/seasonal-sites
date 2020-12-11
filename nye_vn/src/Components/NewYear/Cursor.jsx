import React from 'react' ;


const Cursor = ({img, class_name, alt}) =>{
    return (
<div className={class_name}>
        <img src={img} alt={alt} />
      </div>
    )
}

export default Cursor; 