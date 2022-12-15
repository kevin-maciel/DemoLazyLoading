// routes
import BusinessIcon from '@mui/icons-material/Business';
import BarChartIcon from '@mui/icons-material/BarChart';
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Label from '../../../components/Label';
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  cart: getIcon('ic_cart'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  dashboard: getIcon('ic_dashboard'),
  edificio: <BusinessIcon />,
  tendencia: <BarChartIcon />,
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [{ title: 'Tendencias', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard }],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'Edificio 1',
    items: [
      // MANAGEMENT : USER
      {
        title: 'Edificio 1',
        path: PATH_DASHBOARD.user.root,
        icon: <BusinessIcon />,
        children: [
          { title: 'Linea 1', path: PATH_DASHBOARD.user.profile },
          { title: 'Linea 2', path: PATH_DASHBOARD.user.cards },
          { title: 'Linea 5', path: PATH_DASHBOARD.user.list },
          { title: 'Linea 7', path: PATH_DASHBOARD.user.newUser },
        ],
      },
    ],
  },

  // APP
  // ----------------------------------------------------------------------
  {
    subheader: 'app',
    items: [
      {
        title: 'mail',
        path: PATH_DASHBOARD.mail.root,
        icon: ICONS.mail,
        info: (
          <Label variant="outlined" color="error">
            +32
          </Label>
        ),
      },
    ],
  },
];

export default navConfig;
