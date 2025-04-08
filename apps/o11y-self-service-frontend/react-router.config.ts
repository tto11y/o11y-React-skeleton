// the module path is resolved correctly and the application starts;
// @react-router/dev exports its modules correctly, too;
// maybe it's a TS or GoLand bug
import type { Config } from '@react-router/dev/config';

export default {
  ssr: true,
} satisfies Config;
