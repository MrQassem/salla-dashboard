import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Repeat, Package, AlertTriangle } from 'lucide-react';
import './KPIBar.css';

export default function KPIBar({ data, filters, isRTL }) {
  // Calculate KPIs from data
  const calculateKPIs = () => {
    const { orders, customers, products } = data;

    const totalRevenue = orders.reduce((sum, order) =>
      order.status !== 'cancelled' ? sum + order.total : sum, 0
    );

    const completedOrders = orders.filter(o => o.status !== 'cancelled');
    const avgOrderValue = completedOrders.length > 0
      ? totalRevenue / completedOrders.length
      : 0;

    const returningCustomers = customers.filter(c => c.totalOrders > 1).length;
    const returningRate = customers.length > 0
      ? (returningCustomers / customers.length) * 100
      : 0;

    const conversionRate = 12.4; // Mock - would calculate from traffic data

    const lowStockProducts = products.filter(p => p.stock < 15 && p.stock > 0).length;
    const outOfStockProducts = products.filter(p => p.stock === 0).length;
    const inventoryRisk = lowStockProducts + outOfStockProducts;

    return {
      revenue: totalRevenue,
      revenueChange: 18.2,
      aov: avgOrderValue,
      aovChange: 5.7,
      orders: completedOrders.length,
      ordersChange: 12.1,
      conversion: conversionRate,
      conversionChange: -2.3,
      returningRate,
      returningChange: 8.5,
      inventoryRisk,
      inventoryChange: outOfStockProducts > 0 ? 15 : -5
    };
  };

  const kpis = calculateKPIs();

  const kpiCards = [
    {
      label: isRTL ? 'الإيرادات' : 'Revenue',
      value: `${kpis.revenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${isRTL ? 'ر.س' : 'SAR'}`,
      change: kpis.revenueChange,
      icon: DollarSign,
      color: 'blue'
    },
    {
      label: isRTL ? 'متوسط قيمة الطلب' : 'AOV',
      value: `${kpis.aov.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${isRTL ? 'ر.س' : 'SAR'}`,
      change: kpis.aovChange,
      icon: ShoppingCart,
      color: 'purple'
    },
    {
      label: isRTL ? 'الطلبات' : 'Orders',
      value: kpis.orders.toString(),
      change: kpis.ordersChange,
      icon: Package,
      color: 'green'
    },
    {
      label: isRTL ? 'معدل التحويل' : 'Conversion',
      value: `${kpis.conversion.toFixed(1)}%`,
      change: kpis.conversionChange,
      icon: Users,
      color: 'cyan'
    },
    {
      label: isRTL ? 'العملاء العائدون' : 'Returning',
      value: `${kpis.returningRate.toFixed(1)}%`,
      change: kpis.returningChange,
      icon: Repeat,
      color: 'blue'
    },
    {
      label: isRTL ? 'مخاطر المخزون' : 'Inventory Risk',
      value: `${kpis.inventoryRisk} ${isRTL ? 'منتجات' : 'items'}`,
      change: kpis.inventoryChange,
      icon: AlertTriangle,
      color: kpis.inventoryRisk > 2 ? 'red' : 'green',
      inverse: true
    }
  ];

  return (
    <div className="kpi-bar">
      <div className="kpi-container">
        {kpiCards.map((kpi, index) => {
          const Icon = kpi.icon;
          const isPositive = kpi.inverse ? kpi.change < 0 : kpi.change > 0;
          const TrendIcon = isPositive ? TrendingUp : TrendingDown;

          return (
            <div key={index} className={`kpi-card kpi-${kpi.color}`}>
              <div className="kpi-icon">
                <Icon size={20} />
              </div>
              <div className="kpi-content">
                <div className="kpi-label">{kpi.label}</div>
                <div className="kpi-value">{kpi.value}</div>
                <div className={`kpi-change ${isPositive ? 'positive' : 'negative'}`}>
                  <TrendIcon size={14} />
                  <span>{Math.abs(kpi.change)}%</span>
                  <span className="kpi-period">{filters.dateRange === '7d' ? (isRTL ? 'أسبوع' : 'vs week') : filters.dateRange === '30d' ? (isRTL ? 'شهر' : 'vs month') : (isRTL ? '3 أشهر' : 'vs quarter')}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
