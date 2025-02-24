// pages/_app.tsx
import '../styles/globals.css'; // Importa los estilos globales (este archivo debe existir en /styles)

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default MyApp;
