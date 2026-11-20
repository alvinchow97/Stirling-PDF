import { Wordmark } from "@editor/components/shared/Wordmark";
import { APP_NAME } from "@editor/constants/branding";

interface LoginHeaderProps {
  title: string;
  subtitle?: string;
  centerOnly?: boolean;
}

export default function LoginHeader({
  title,
  subtitle,
  centerOnly = false,
}: LoginHeaderProps) {
  return (
    <div
      className={`login-header${centerOnly ? " login-header-centered" : ""}`}
    >
      <div className="login-header-logos">
        <Wordmark alt={APP_NAME} className="login-logo-text" />
      </div>
      {title && <h1 className="login-title">{title}</h1>}
      {subtitle && <p className="login-subtitle">{subtitle}</p>}
    </div>
  );
}
