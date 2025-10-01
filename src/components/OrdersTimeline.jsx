import { Package, CheckCircle, Truck, Clock, XCircle } from 'lucide-react';
import './OrdersTimeline.css';

export default function OrdersTimeline({ orders, isRTL }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return { icon: CheckCircle, color: '#10b981' };
      case 'shipped':
        return { icon: Truck, color: '#3b82f6' };
      case 'processing':
        return { icon: Clock, color: '#f59e0b' };
      case 'cancelled':
        return { icon: XCircle, color: '#ef4444' };
      default:
        return { icon: Package, color: '#6b7280' };
    }
  };

  const getStatusLabel = (status) => {
    const labels = {
      delivered: isRTL ? 'تم التسليم' : 'Delivered',
      shipped: isRTL ? 'تم الشحن' : 'Shipped',
      processing: isRTL ? 'قيد المعالجة' : 'Processing',
      cancelled: isRTL ? 'ملغى' : 'Cancelled'
    };
    return labels[status] || status;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffHours = Math.floor((now - date) / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) {
      return isRTL ? 'الآن' : 'Just now';
    } else if (diffHours < 24) {
      return isRTL ? `منذ ${diffHours} ساعة` : `${diffHours}h ago`;
    } else if (diffDays === 1) {
      return isRTL ? 'أمس' : 'Yesterday';
    } else if (diffDays < 7) {
      return isRTL ? `منذ ${diffDays} أيام` : `${diffDays}d ago`;
    } else {
      return date.toLocaleDateString(isRTL ? 'ar-SA' : 'en-US', { month: 'short', day: 'numeric' });
    }
  };

  const sortedOrders = [...orders].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="orders-timeline">
      <div className="timeline-header">
        <h3>{isRTL ? 'الطلبات الأخيرة' : 'Recent Orders'}</h3>
        <span className="order-count">
          <Package size={16} />
          {orders.length} {isRTL ? 'طلب' : 'orders'}
        </span>
      </div>

      <div className="timeline-list">
        {sortedOrders.map((order, index) => {
          const statusInfo = getStatusIcon(order.status);
          const StatusIcon = statusInfo.icon;

          return (
            <div key={order.id} className="timeline-item">
              <div className="timeline-marker">
                <div
                  className="timeline-icon"
                  style={{ backgroundColor: `${statusInfo.color}20`, borderColor: statusInfo.color }}
                >
                  <StatusIcon size={16} style={{ color: statusInfo.color }} />
                </div>
                {index < sortedOrders.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="order-header">
                  <div className="order-info">
                    <span className="order-number">{order.orderNumber}</span>
                    <span className="order-customer">{order.customerName}</span>
                  </div>
                  <span className="order-time">{formatDate(order.date)}</span>
                </div>

                <div className="order-items">
                  {order.items.slice(0, 2).map((item, i) => (
                    <div key={i} className="order-item">
                      <span className="item-qty">{item.quantity}×</span>
                      <span className="item-title">{item.title}</span>
                    </div>
                  ))}
                  {order.items.length > 2 && (
                    <div className="more-items">
                      +{order.items.length - 2} {isRTL ? 'المزيد' : 'more'}
                    </div>
                  )}
                </div>

                <div className="order-footer">
                  <span className={`order-status status-${order.status}`}>
                    {getStatusLabel(order.status)}
                  </span>
                  <span className="order-total">
                    {order.total.toFixed(2)} {isRTL ? 'ر.س' : 'SAR'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
