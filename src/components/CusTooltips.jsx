import styled from '@emotion/styled';
import { Tooltip, tooltipClasses } from '@mui/material';

export const CusToolTip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: 12,
  },
}));
