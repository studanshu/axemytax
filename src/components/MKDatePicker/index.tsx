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

import { ReactElement } from "react";

// @ts-expect-error - No type definitions available for react-flatpickr
import Flatpickr from "react-flatpickr";
import { BaseOptions } from "flatpickr/dist/types/options";

// react-flatpickr styles
import "flatpickr/dist/flatpickr.css";

// Material Kit 2 React components
import MKInput from "components/MKInput";

interface MKDatePickerProps extends Partial<BaseOptions> {
  input?: Record<string, any>;
}

function MKDatePicker({ input = {}, ...rest }: MKDatePickerProps): ReactElement {
  return (
    <Flatpickr
      {...(rest as any)}
      render={(props: any, ref: any) => (
        <MKInput {...input} defaultValue={props.defaultValue} inputRef={ref} />
      )}
    />
  );
}

export default MKDatePicker;
