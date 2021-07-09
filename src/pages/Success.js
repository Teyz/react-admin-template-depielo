// material
import { Container } from '@material-ui/core';
// components
import Page from '../components/Page';
import { Success } from '../components/_dashboard/success';

// ----------------------------------------------------------------------

export default function SuccessApp() {
  return (
    <Page title="Dashboard | Depielo">
      <Container maxWidth="xl">
        <Success />
      </Container>
    </Page>
  );
}
