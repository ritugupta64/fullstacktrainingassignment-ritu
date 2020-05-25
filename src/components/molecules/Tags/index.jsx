import React from 'react';
import Button from '../../atoms/Button';
import './tags.style.scss'


const Tags = ({ className, tags, getCloseItem }) => {
  return (
    <div className="">
      {tags?.map(itm => (
        <div className="tag__item" key={itm.name}>
          {itm.name}
          <Button onClick={() => getCloseItem(itm.category, itm.name)}>
             x
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Tags
