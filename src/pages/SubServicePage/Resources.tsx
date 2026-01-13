import { Box, Container, Grid } from "@mui/material";
import colors from "assets/theme/base/colors";
import SectionHeader from "components/Custom/SectionHeader";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import { FC, Suspense, ReactNode } from "react";
import {
  AccountBalanceOutlined,
  DescriptionOutlined,
  GavelOutlined,
} from "@mui/icons-material";

const renderLoader = () => <></>;

interface ResourceDetail {
  title: string;
  description: string;
  link: string;
  image?: string;
  icon?: ReactNode;
}

interface ResourcesProps {
  jsonData: {
    caption?: string;
    title?: string;
    details: ResourceDetail[];
  };
}

// Helper function to determine appropriate icon based on link domain
const getIconForResource = (link: string, customIcon?: ReactNode): ReactNode => {
  if (customIcon) return customIcon;
  
  const url = link.toLowerCase();
  
  // Government/Regulatory bodies
  if (url.includes('rbi.org') || url.includes('sebi.gov')) {
    return <AccountBalanceOutlined />;
  }
  // Legal/Acts/Regulations
  if (url.includes('legislative.gov') || url.includes('mca.gov') || url.includes('act')) {
    return <GavelOutlined />;
  }
  // Default for general resources/documents
  return <DescriptionOutlined />;
};

const Resources: FC<ResourcesProps> = ({ jsonData }) => {
  return (
    <Suspense fallback={renderLoader()}>
      <Box mt={24} sx={{ backgroundColor: colors.light.main }}>
        <Container>
          <Grid
            container
            justifyContent="center"
            sx={{ py: { xs: 6, xl: 12 }, gap: { xs: 6, xl: 12 }, px: { xl: 2 } }}
          >
            <Grid item>
              <SectionHeader
                caption={jsonData.caption || ""}
                title={jsonData.title || ""}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3} justifyContent="center">
                {jsonData.details.map((resource, index) => (
                  <Grid item key={index} xs={12} md={6} lg={4}>
                    <FilledInfoCard
                      color="secondary"
                      icon={getIconForResource(resource.link, resource.icon)}
                      title={resource.title}
                      description={resource.description}
                      action={{
                        type: "external",
                        route: resource.link,
                        label: "Visit Resource",
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Suspense>
  );
};

export default Resources;
