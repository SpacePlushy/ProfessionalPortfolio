import { Moon, Sun, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function DarkModeToggle() {
  const { theme, resolvedTheme, toggleTheme } = useTheme();
  
  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun size={20} />;
      case 'dark':
        return <Moon size={20} />;
      case 'system':
        return <Monitor size={20} />;
      default:
        return <Monitor size={20} />;
    }
  };

  const getAriaLabel = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark mode';
      case 'dark':
        return 'Switch to system preference';
      case 'system':
        return `Switch to light mode (currently ${resolvedTheme})`;
      default:
        return 'Toggle theme';
    }
  };

  const getSrOnlyText = () => {
    switch (theme) {
      case 'light':
        return 'Light mode active. Click to switch to dark mode.';
      case 'dark':
        return 'Dark mode active. Click to switch to system preference.';
      case 'system':
        return `System preference active (currently ${resolvedTheme}). Click to switch to light mode.`;
      default:
        return 'Toggle theme';
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={getAriaLabel()}
      className="p-2 rounded-md text-navy dark:text-foreground hover:bg-muted dark:hover:bg-muted/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
    >
      <span className="sr-only">
        {getSrOnlyText()}
      </span>
      {getIcon()}
    </motion.button>
  );
}
