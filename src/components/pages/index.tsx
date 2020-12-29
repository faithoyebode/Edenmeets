import React, { FC, ReactElement } from 'react'
import routes from './routes'
import { convertRoutesToComponents } from 'helpers'

const Pages: FC = (): ReactElement => {
  return (
    <>
      {convertRoutesToComponents(routes)}
    </>
  );
}

export default Pages;