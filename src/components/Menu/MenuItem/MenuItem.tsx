import React from 'react';

interface IProps {
    children: React.ReactNode;
}

function MenuItem({children}: IProps) {
  return (
    <div className="menu-item">{children}</div>
  )
}

export default MenuItem