import { Search, Globe, Calendar, Filter } from 'lucide-react';
import './Header.css';

export default function Header({ isRTL, onToggleRTL, filters, onFiltersChange }) {
  const handleSearchChange = (e) => {
    onFiltersChange({ ...filters, searchQuery: e.target.value });
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="logo">
            <div className="logo-icon">S</div>
            <div className="logo-text">
              <h1>{isRTL ? 'لوحة تحكم سلة' : 'Salla Dashboard'}</h1>
              <span className="badge-sandbox">Sandbox</span>
            </div>
          </div>
        </div>

        <div className="header-center">
          <div className="search-bar">
            <Search size={18} />
            <input
              type="text"
              placeholder={isRTL ? 'ابحث عن المنتجات، العملاء، الطلبات...' : 'Search products, customers, orders...'}
              value={filters.searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="header-right">
          <div className="filters-group">
            <button className="filter-btn" title={isRTL ? 'التاريخ' : 'Date Range'}>
              <Calendar size={18} />
              <select
                value={filters.dateRange}
                onChange={(e) => onFiltersChange({ ...filters, dateRange: e.target.value })}
              >
                <option value="7d">{isRTL ? '7 أيام' : '7 days'}</option>
                <option value="30d">{isRTL ? '30 يوم' : '30 days'}</option>
                <option value="90d">{isRTL ? '90 يوم' : '90 days'}</option>
              </select>
            </button>

            <button className="filter-btn" title={isRTL ? 'القناة' : 'Channel'}>
              <Filter size={18} />
              <select
                value={filters.channel}
                onChange={(e) => onFiltersChange({ ...filters, channel: e.target.value })}
              >
                <option value="all">{isRTL ? 'جميع القنوات' : 'All Channels'}</option>
                <option value="instagram">Instagram</option>
                <option value="google">Google</option>
                <option value="facebook">Facebook</option>
                <option value="direct">{isRTL ? 'مباشر' : 'Direct'}</option>
                <option value="snapchat">Snapchat</option>
              </select>
            </button>
          </div>

          <button className="rtl-toggle" onClick={onToggleRTL} title={isRTL ? 'English' : 'عربي'}>
            <Globe size={18} />
            <span>{isRTL ? 'EN' : 'ع'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
