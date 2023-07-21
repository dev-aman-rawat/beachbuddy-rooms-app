import React from "react";
// import Rings, { Bars } from "react-loader-spinner/dist/loader/Rings";
import { Rings } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="loading">
      <span>
        <Rings height="111" width="111" color="#567ec2" />
      </span>
      <h5>loading rooms....</h5>
    </div>
  );
}
