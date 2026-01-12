import { Box, Container, Grid } from "@mui/material";
import FaqQuestion from "components/Custom/FaqQuestion";
import SectionHeader from "components/Custom/SectionHeader";
import { FC, Suspense, useState } from "react";

const renderLoader = () => <></>;

interface FaqItem {
  q: string;
  a: string;
}

interface FaqProps {
  jsonData: {
    image?: string;
    caption?: string;
    title?: string;
    faqs: FaqItem[];
  };
}

const Faq: FC<FaqProps> = ({ jsonData }) => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <Suspense fallback={renderLoader()}>
      <Box className="rootFaq">
        <Container>
          <Grid
            container
            alignItems="center"
            className="Faq"
            justifyContent="space-between"
            sx={{ my: { xs: 10, xl: 24 }, px: { lg: 2 } }}
          >
            <Grid
              item
              xs={0}
              lg={5}
              sx={{
                display: { xs: "none", lg: "block" },
              }}
            >
              <img
                src={jsonData.image}
                alt="FAQ"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Grid container spacing={6} className="faqContent">
                <Grid item xs={12}>
                  <SectionHeader
                    caption={jsonData.caption || ""}
                    title={jsonData.title || ""}
                    alignItems="flex-end"
                  />
                </Grid>
                <Grid item xs={12}>
                  {jsonData.faqs.map((faq, index) => (
                    <Box key={index} mb={1}>
                      <FaqQuestion
                        question={faq.q}
                        answer={faq.a}
                        isOpen={openQuestionIndex === index}
                        toggleAnswer={() => handleToggle(index)}
                      />
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Suspense>
  );
};

export default Faq;
