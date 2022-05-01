import React from "react";

import Location from '../location';

interface MainBodyProps {}

const MainBody: React.FC<MainBodyProps> = () => {
  return (
    <div>
      <Location />
    </div>
  );
};

export default MainBody;
