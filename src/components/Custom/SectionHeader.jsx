// TestimonialComponent.jsx
import React from 'react';
import Grid2 from '@mui/material/Grid2';
import MKTypography from '../MKTypography'; // Adjust the import path as necessary

const SectionHeader = ({ caption, title, alignItems = "flex-start", variant = "h3", color = "secondary", sx }) => {
    return (
        <Grid2 container alignItems={alignItems} display="flex" flexDirection="column" sx={sx}>
            <Grid2 item display="flex" flexDirection="column" gap={1} alignItems={alignItems}>
                <MKTypography item variant="caption" color="info">
                    {caption}
                </MKTypography>
                <MKTypography item variant={variant} color={color}>
                    {title}
                </MKTypography>
            </Grid2>
        </Grid2>
    );
};

export default SectionHeader;