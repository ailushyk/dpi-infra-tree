import React, { FC } from 'react';

interface Props {
  children: string;
}

export const Button: FC<Props> = ({children}) => {
  return (
    <button>{children}</button>
  );
};
