import React from "react";
import { Link } from "react-router-dom";

export function Page2() {
  return (
    <React.Fragment>
      <div>Page b from App2</div>
      <Link to="/page-a">Go to Page a</Link>
    </React.Fragment>
  );
}
