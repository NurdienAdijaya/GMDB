import React from "react";
import { Rating } from "@material-ui/lab";
import Box from "@material-ui/core/Box";

export default function SimpleRating({ value, setValue }) {
  // const [value, setValue] = React.useState(2);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </div>
  );
}
