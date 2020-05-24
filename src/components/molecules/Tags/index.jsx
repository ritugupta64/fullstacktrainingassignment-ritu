import React from 'react';
import Button from '../../atoms/Button';


const Tags = ({ className, tags, getCloseItem }) => {
  return (
    <div className="">
      {tags?.map(itm => (
        <div className="tag__item" key={itm.name}>
          {itm.name}
          <Button onClick={() => getCloseItem(itm.category, itm.name)}>
             close
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Tags
