import { Users, AlertCircle, Crown, Star } from 'lucide-react';
import './CustomersPanel.css';

export default function CustomersPanel({ customers, isRTL }) {
  const segments = {
    VIP: { count: 0, color: '#8b5cf6', icon: Crown, totalSpent: 0 },
    Loyal: { count: 0, color: '#3b82f6', icon: Star, totalSpent: 0 },
    Regular: { count: 0, color: '#10b981', icon: Users, totalSpent: 0 },
    New: { count: 0, color: '#06b6d4', icon: Users, totalSpent: 0 }
  };

  customers.forEach(customer => {
    if (segments[customer.segment]) {
      segments[customer.segment].count++;
      segments[customer.segment].totalSpent += customer.totalSpent;
    }
  });

  const churnRiskCustomers = customers.filter(c => c.churnRisk === 'high' || c.churnRisk === 'medium');

  return (
    <div className="customers-panel">
      <div className="panel-header">
        <h3>{isRTL ? 'شرائح العملاء' : 'Customer Segments'}</h3>
        <span className="total-customers">
          <Users size={16} />
          {customers.length} {isRTL ? 'عميل' : 'customers'}
        </span>
      </div>

      <div className="segments-grid">
        {Object.entries(segments).map(([name, data]) => {
          const Icon = data.icon;
          const avgSpent = data.count > 0 ? data.totalSpent / data.count : 0;

          return (
            <div key={name} className="segment-card" style={{ borderLeftColor: data.color }}>
              <div className="segment-icon" style={{ backgroundColor: `${data.color}20`, color: data.color }}>
                <Icon size={20} />
              </div>
              <div className="segment-details">
                <div className="segment-name">{isRTL ?
                  (name === 'VIP' ? 'متميز' : name === 'Loyal' ? 'مخلص' : name === 'Regular' ? 'عادي' : 'جديد')
                  : name}</div>
                <div className="segment-count">{data.count} {isRTL ? 'عميل' : 'customers'}</div>
                <div className="segment-avg">
                  {isRTL ? 'متوسط الإنفاق:' : 'Avg:'} {avgSpent.toFixed(2)} {isRTL ? 'ر.س' : 'SAR'}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {churnRiskCustomers.length > 0 && (
        <div className="churn-alert">
          <div className="alert-header">
            <AlertCircle size={18} />
            <h4>{isRTL ? 'تنبيه: عملاء في خطر' : 'Churn Risk Alert'}</h4>
          </div>
          <p className="alert-message">
            {isRTL
              ? `${churnRiskCustomers.length} عميل لم يقوموا بطلبات مؤخراً. أرسل حملة استعادة.`
              : `${churnRiskCustomers.length} customers haven't ordered recently. Send win-back campaign.`}
          </p>
          <div className="churn-customers">
            {churnRiskCustomers.slice(0, 3).map(customer => (
              <div key={customer.id} className="churn-customer">
                <div className="customer-avatar">
                  {(isRTL ? customer.nameAr : customer.name).charAt(0)}
                </div>
                <div className="customer-info">
                  <div className="customer-name">{isRTL ? customer.nameAr : customer.name}</div>
                  <div className="customer-stats">
                    {isRTL ? 'آخر طلب:' : 'Last order:'} {new Date(customer.lastOrderDate).toLocaleDateString(isRTL ? 'ar-SA' : 'en-US', { month: 'short', day: 'numeric' })}
                  </div>
                </div>
                <div className={`risk-badge risk-${customer.churnRisk}`}>
                  {customer.churnRisk === 'high' ? (isRTL ? 'عالي' : 'High') : (isRTL ? 'متوسط' : 'Med')}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
