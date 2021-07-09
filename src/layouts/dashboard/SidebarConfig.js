import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import eyeOutline from '@iconify/icons-eva/eye-outline';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'view',
    path: '/view',
    icon: getIcon(eyeOutline)
  }
];

export default sidebarConfig;
