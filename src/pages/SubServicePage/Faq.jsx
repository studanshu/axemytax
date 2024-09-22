import { Box, Container, Grid } from "@mui/material";
import FaqQuestion from "components/Custom/FaqQuestion";
import SectionHeader from "components/Custom/SectionHeader";
import PropTypes from "prop-types";
import { Suspense, useState } from "react";
const renderLoader = () => <p>Loading</p>;

function Faq({ jsonData }) {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };
  const FaqJson = jsonData;
  return (
    <Suspense fallback={renderLoader()}>
      <Box className="rootFaq">
        <Container>
          <Grid
            container
            alignItems="center"
            className="Faq"
            justifyContent="space-between"
            sx={{ py: { xs: 10, xl: 16 }, px: { lg: 2 } }}
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
                src={FaqJson.image}
                alt="FAQ"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Grid container spacing={6} className="faqContent">
                <Grid item xs={12}>
                  <SectionHeader
                    caption={FaqJson.caption}
                    title={FaqJson.title}
                    alignItems="flex-end"
                  />
                </Grid>
                <Grid item xs={12}>
                  {FaqJson.faqs.map((faq, index) => (
                    <Box key={index} mb={1}>
                      <FaqQuestion
                        key={index}
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
}
Faq.propTypes = {
  jsonData: PropTypes.shape({
    image: PropTypes.string,
    caption: PropTypes.string,
    title: PropTypes.string,
    faqs: PropTypes.arrayOf(
      PropTypes.shape({
        q: PropTypes.string,
        a: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default Faq;
