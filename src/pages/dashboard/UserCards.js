import { Container } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// _mock_
// components
import Page from '../../components/Page';
// sections

// ----------------------------------------------------------------------

export default function UserCards() {
  const { themeStretch } = useSettings();

  return (
    <Page title="User: Cards">
      <Container maxWidth={themeStretch ? false : 'lg'}>
       <h1>Cards</h1>
      </Container>
    </Page>
  );
}
