// material
import { Container } from '@material-ui/core';
// components
import Page from '../components/Page';
import { AppListingLevels } from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Depielo">
      <Container maxWidth="xl">
        <AppListingLevels />
      </Container>
    </Page>
  );
}
