
import { createTheme, NextUIProvider } from "@nextui-org/react";


export default function App({ Component, pageProps }) {
  //const [supabase] = useState(() => createBrowserSupabaseClient());
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
