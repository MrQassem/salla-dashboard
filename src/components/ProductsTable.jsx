import { AlertTriangle, TrendingUp, Package, ExternalLink } from 'lucide-react';
import './ProductsTable.css';

export default function ProductsTable({ products, isRTL, loading }) {
  if (loading) {
    return (
      <div className="table-card">
        <div className="table-header">
          <h3>{isRTL ? 'المنتجات' : 'Products'}</h3>
        </div>
        <div className="skeleton-table">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="skeleton-row">
              <div className="skeleton skeleton-img"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text-sm"></div>
              <div className="skeleton skeleton-text-sm"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const getHealthColor = (score) => {
    if (score >= 80) return 'success';
    if (score >= 60) return 'warning';
    return 'danger';
  };

  const getStockStatus = (stock) => {
    if (stock === 0) return { label: isRTL ? 'نفذ' : 'Out of Stock', color: 'danger' };
    if (stock < 15) return { label: isRTL ? 'منخفض' : 'Low', color: 'warning' };
    return { label: isRTL ? 'متوفر' : 'In Stock', color: 'success' };
  };

  return (
    <div className="table-card">
      <div className="table-header">
        <h3>{isRTL ? 'المنتجات' : 'Products'}</h3>
        <div className="table-stats">
          <span className="stat-badge">
            <Package size={14} />
            {products.length} {isRTL ? 'منتجات' : 'products'}
          </span>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="products-table">
          <thead>
            <tr>
              <th>{isRTL ? 'المنتج' : 'Product'}</th>
              <th>{isRTL ? 'SKU' : 'SKU'}</th>
              <th>{isRTL ? 'السعر' : 'Price'}</th>
              <th>{isRTL ? 'المخزون' : 'Stock'}</th>
              <th>{isRTL ? 'المبيعات (30 يوم)' : 'Sales (30d)'}</th>
              <th>{isRTL ? 'الإيرادات' : 'Revenue'}</th>
              <th>{isRTL ? 'الصحة' : 'Health'}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const stockStatus = getStockStatus(product.stock);
              const healthColor = getHealthColor(product.healthScore);

              return (
                <tr key={product.id} className="product-row">
                  <td>
                    <div className="product-info">
                      <img src={product.imageUrl} alt={product.title} className="product-image" />
                      <div className="product-details">
                        <div className="product-title">{isRTL ? product.titleAr : product.title}</div>
                        <div className="product-description">
                          {isRTL ? product.descriptionAr?.substring(0, 50) : product.description.substring(0, 50)}...
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="sku-badge">{product.sku}</span>
                  </td>
                  <td>
                    <span className="price">{product.price.toFixed(2)} {isRTL ? 'ر.س' : 'SAR'}</span>
                  </td>
                  <td>
                    <span className={`stock-badge stock-${stockStatus.color}`}>
                      {product.stock} - {stockStatus.label}
                    </span>
                  </td>
                  <td>
                    <div className="sales-info">
                      <TrendingUp size={14} className="sales-icon" />
                      <span>{product.sales30d}</span>
                    </div>
                  </td>
                  <td>
                    <span className="revenue">{product.revenue30d.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </td>
                  <td>
                    <div className="health-score">
                      <div className={`health-circle health-${healthColor}`}>
                        {product.healthScore}
                      </div>
                      {product.issues.length > 0 && (
                        <div className="health-issues">
                          <AlertTriangle size={14} />
                          <div className="issues-tooltip">
                            {product.issues.map((issue, i) => (
                              <div key={i}>• {issue}</div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                  <td>
                    <button className="action-btn" title={isRTL ? 'عرض التفاصيل' : 'View Details'}>
                      <ExternalLink size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
