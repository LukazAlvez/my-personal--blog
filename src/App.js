import { ThemeProvider } from './contextApi/theme-context';
import AppRoutes from './routes';

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
