import { useEffect } from 'react';
// @mui
import { Container } from '@mui/material';
// redux
import { useDispatch } from '../../redux/store';
import { getLabels } from '../../redux/slices/mail';
// routes
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';

// ----------------------------------------------------------------------

export default function Mail() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLabels());
  }, [dispatch]);

  return (
    <Page title="Mail">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <h1>Mail</h1>
      </Container>
    </Page>
  );
}
