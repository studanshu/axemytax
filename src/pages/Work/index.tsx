import { Container } from "@mui/material";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import TopLayout from "pages/utils/TopLayout";
import { FC } from "react";

interface WorkCase {
  tags: string[];
  title: string;
  company: string;
  challenge: string[];
  built: string[];
  delivered: string[];
  builtWith: string[];
  relatedService: { name: string; route: string };
}

interface WorkJsonData {
  hero: { title: string; subtitle: string; disclaimer: string };
  cases: WorkCase[];
  cta: { title: string; text: string };
}

interface WorkProps {
  jsonData: WorkJsonData;
}

const Work: FC<WorkProps> = ({ jsonData }) => {
  const { hero, cases, cta } = jsonData;

  return (
    <>
      <TopLayout />
      <Container>
        <MKBox py={6} textAlign="center">
          <MKTypography variant="h1" mb={2}>
            {hero.title}
          </MKTypography>
          <MKTypography variant="h4" color="text" mb={3}>
            {hero.subtitle}
          </MKTypography>
          <MKTypography variant="body1" color="text">
            {hero.disclaimer}
          </MKTypography>
        </MKBox>

        {cases.map((workCase) => (
          <MKBox key={workCase.title} py={4}>
            <MKTypography variant="button" color="info" fontWeight="bold">
              {workCase.tags.join(" · ")}
            </MKTypography>
            <MKTypography variant="h2" mt={1}>
              {workCase.title}
            </MKTypography>
            <MKTypography variant="subtitle2" color="info" fontWeight="bold" mt={1}>
              {workCase.company}
            </MKTypography>

            <MKTypography variant="h4" mt={4} mb={2}>
              The challenge &amp; what we built
            </MKTypography>
            {[...workCase.challenge, ...workCase.built].map((paragraph, index) => (
              <MKTypography key={index} variant="body1" color="text" mb={2}>
                {paragraph}
              </MKTypography>
            ))}

            <MKTypography variant="h4" mt={4} mb={2}>
              What was delivered
            </MKTypography>
            {workCase.delivered.map((item) => (
              <MKTypography key={item} variant="body1" color="text" mb={1}>
                ✓ {item}
              </MKTypography>
            ))}

            <MKTypography variant="h4" mt={4} mb={2}>
              Built with
            </MKTypography>
            <MKBox display="flex" flexWrap="wrap" gap={1}>
              {workCase.builtWith.map((item) => (
                <MKBadge key={item} badgeContent={item} color="info" variant="contained" />
              ))}
            </MKBox>

            <MKBox mt={4}>
              <MKTypography variant="body2" color="text" mb={2}>
                Related service:
              </MKTypography>
              <MKButton href={workCase.relatedService.route} variant="outlined" color="info">
                {workCase.relatedService.name}
              </MKButton>
            </MKBox>
          </MKBox>
        ))}

        <MKBox py={6} textAlign="center">
          <MKTypography variant="h2" mb={2}>
            {cta.title}
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={3}>
            {cta.text}
          </MKTypography>
          <MKButton href="/contact" variant="gradient" color="info">
            Contact us
          </MKButton>
        </MKBox>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default Work;
