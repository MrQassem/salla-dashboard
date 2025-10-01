import { CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';
import './Toast.css';

export default function Toast({ message, type = 'success' }) {
  const icons = {
    success: { icon: CheckCircle, color: '#10b981' },
    error: { icon: XCircle, color: '#ef4444' },
    warning: { icon: AlertTriangle, color: '#f59e0b' },
    info: { icon: Info, color: '#3b82f6' }
  };

  const { icon: Icon, color } = icons[type] || icons.info;

  return (
    <div className={`toast toast-${type}`}>
      <Icon size={20} style={{ color }} />
      <span>{message}</span>
    </div>
  );
}
