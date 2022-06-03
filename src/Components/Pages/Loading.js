import React, { useState } from "react";
import ContentLoader from "react-content-loader";

export default function Loading() {
  return (
    <div className="Loading ">
      <div className="row ms-5 mt-5">
        <div className="col ms-5 mt-5">
          <ContentLoader
            speed={2}
            width={500}
            height={200}
            viewBox="0 0 500 200"
            backgroundColor="#deb0a0"
            foregroundColor="#ebeaea"
          >
            <rect x="65" y="25" rx="3" ry="3" width="88" height="6" />
            <rect x="-1" y="67" rx="3" ry="3" width="52" height="6" />
            <rect x="67" y="52" rx="3" ry="3" width="119" height="7" />
            <rect x="68" y="76" rx="3" ry="3" width="167" height="4" />
            <circle cx="25" cy="30" r="20" />
            <rect x="-17" y="96" rx="0" ry="0" width="254" height="103" />
            <rect x="150" y="178" rx="0" ry="0" width="44" height="4" />
            <rect x="131" y="171" rx="0" ry="0" width="40" height="0" />
            <rect x="299" y="77" rx="0" ry="0" width="218" height="17" />
            <circle cx="380" cy="37" r="30" />
            <rect x="298" y="116" rx="0" ry="0" width="254" height="103" />
          </ContentLoader>
        </div>
      </div>
    </div>
  );
}
