import React from "react";
import { error_img } from "../../assets";

function PageNotFound() {
  return (
    <div className="w-full h-full fx-col clr-gray-50 fx-jc-center fx-ai-center explore">
      <img src={error_img} alt="error" className="h-20 w-20" />
      <h2>Page Not Found</h2>
    </div>
  );
}

export { PageNotFound };
