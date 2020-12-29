import React, { FC, ReactElement } from "react";

interface withSuspenseProps {
  page: string;
  data?: Record<string, any>;
}


const withSuspense = (args: withSuspenseProps): FC<any> => {
  const { page, data } = args;

  return function (props: Record<string, any>): ReactElement{
    const LazyComponent = React.lazy(() => import(`components/pages/${page}`));

    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyComponent {...props} {...data} />
      </React.Suspense>
    );
  };
}

export default withSuspense;