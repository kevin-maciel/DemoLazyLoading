// @mui
import { Container, Box } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// _mock_
import { _userCards } from '../../_mock';
// components
import Page from '../../components/Page';
// sections
import { UserCard } from '../../sections/@dashboard/user/cards';

// ----------------------------------------------------------------------

export default function UserCards() {
  const { themeStretch } = useSettings();

  return (
    <Page title="User: Cards">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {_userCards.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Box>
      </Container>
    </Page>
  );
}
