import { useState, useEffect } from 'react';
import Header from './components/Header';
import KPIBar from './components/KPIBar';
import Dashboard from './components/Dashboard';
import AISuggestionsModal from './components/AISuggestionsModal';
import Toast from './components/Toast';
import {
  fetchProducts,
  fetchCustomers,
  fetchOrders,
  fetchInsights,
  fetchAreasToImprove,
  fetchAbandonedCarts
} from './services/mockData';

function App() {
  const [isRTL, setIsRTL] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    products: [],
    customers: [],
    orders: [],
    insights: [],
    areasToImprove: [],
    abandonedCarts: []
  });
  const [filters, setFilters] = useState({
    dateRange: '30d',
    channel: 'all',
    segment: 'all',
    status: 'all',
    searchQuery: ''
  });
  const [showAIModal, setShowAIModal] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  }, [isRTL]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [products, customers, orders, insights, areasToImprove, abandonedCarts] = await Promise.all([
        fetchProducts(),
        fetchCustomers(),
        fetchOrders(),
        fetchInsights(),
        fetchAreasToImprove(),
        fetchAbandonedCarts()
      ]);
      setData({ products, customers, orders, insights, areasToImprove, abandonedCarts });
    } catch (error) {
      showToast('Failed to load data', 'error');
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => setToast(null), 4000);
  };

  const handleApplyUpdate = (suggestionId, targetId) => {
    // In real implementation, this would POST to backend
    console.log('Applying update:', { suggestionId, targetId });
    showToast('Update applied successfully! Changes saved to system.', 'success');
  };

  return (
    <div className="app">
      <Header
        isRTL={isRTL}
        onToggleRTL={() => setIsRTL(!isRTL)}
        filters={filters}
        onFiltersChange={setFilters}
      />

      <KPIBar
        data={data}
        filters={filters}
        isRTL={isRTL}
      />

      <Dashboard
        data={data}
        filters={filters}
        loading={loading}
        isRTL={isRTL}
        onOpenAIModal={() => setShowAIModal(true)}
        onRefresh={loadData}
        onApplyUpdate={handleApplyUpdate}
      />

      {showAIModal && (
        <AISuggestionsModal
          isRTL={isRTL}
          onClose={() => setShowAIModal(false)}
          onApply={handleApplyUpdate}
          context={data}
        />
      )}

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
}

export default App;
