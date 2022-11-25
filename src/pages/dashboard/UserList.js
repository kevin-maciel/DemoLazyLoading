import {
  Container,
} from '@mui/material';
// routes
// hooks
import useSettings from '../../hooks/useSettings';
// _mock_
// components
import Page from '../../components/Page';

export default function UserList() {
  const { themeStretch } = useSettings();

  return (
    <Page title="User: List">
      <Container maxWidth={themeStretch ? false : 'lg'}>
      <h1>List</h1>
      </Container>
    </Page>
  );
}
