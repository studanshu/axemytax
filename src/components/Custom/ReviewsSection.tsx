import { Avatar, Container, Paper, Rating } from "@mui/material";
import { ReviewsSectionData } from "assets/data/Reviews/types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import SectionHeader from "components/Custom/SectionHeader";
import CustomSlider from "components/Custom/CustomSlider";
import { FC } from "react";

interface ReviewsSectionProps {
  jsonData: ReviewsSectionData;
}

const ReviewsSection: FC<ReviewsSectionProps> = ({ jsonData }) => {
  return (
    <MKBox component="section" py={8}>
      <Container>
        <MKBox textAlign="center" mb={6}>
          <SectionHeader
            caption={jsonData.caption}
            title={jsonData.title}
          />
        </MKBox>
        <CustomSlider>
          {jsonData.reviews.map((review, idx) => (
            <MKBox key={idx} px={2} py={1}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  height: "100%",
                  minHeight: 220,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <MKBox display="flex" alignItems="center" gap={2}>
                  <Avatar
                    sx={{
                      bgcolor: "info.main",
                      width: 44,
                      height: 44,
                      fontWeight: 700,
                    }}
                  >
                    {review.avatarInitial || review.author.charAt(0)}
                  </Avatar>
                  <MKBox>
                    <MKTypography variant="h6" color="black">
                      {review.author}
                    </MKTypography>
                    <MKTypography variant="caption" color="text">
                      {review.date}
                    </MKTypography>
                  </MKBox>
                </MKBox>
                <Rating value={review.rating} readOnly size="small" />
                <MKTypography variant="body2" color="text" sx={{ flex: 1 }}>
                  {review.text}
                </MKTypography>
              </Paper>
            </MKBox>
          ))}
        </CustomSlider>
      </Container>
    </MKBox>
  );
};

export default ReviewsSection;
