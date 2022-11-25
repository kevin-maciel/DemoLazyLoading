import { Container } from '@mui/material';
// routes
// hooks
import useSettings from '../../hooks/useSettings';
// _mock_
// components
import Page from '../../components/Page';

export default function UserProfile() {
  const { themeStretch } = useSettings();

  return (
    <Page title="User: Profile">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <h1>Profile</h1>
      </Container>
    </Page>
  );
}
