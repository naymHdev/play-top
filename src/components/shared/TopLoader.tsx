import React from "react";
import NextTopLoader from 'nextjs-toploader';

const TopLoader = () => {
  return (
    <div>
      <NextTopLoader
        color="#36BF40"
        initialPosition={0.08}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        zIndex={1600}
        showAtBottom={false}
      />
    </div>
  );
};

export default TopLoader;
