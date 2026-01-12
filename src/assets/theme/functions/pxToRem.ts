/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  The pxToRem() function helps you to convert a px unit into a rem unit, 
 */
import breakpoints from "../base/breakpoints";

function pxToRem(number: number, baseNumber?: number): string {
  let base: number;

  if (baseNumber) {
    base = baseNumber;
  } else if (window.innerWidth >= breakpoints.values.lg) {
    base = 16;
  } else if (window.innerWidth >= breakpoints.values.md) {
    base = 18;
  } else {
    base = 20;
  }

  return `${number / base}rem`;
}

export default pxToRem;
