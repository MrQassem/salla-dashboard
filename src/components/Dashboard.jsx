import SalesChart from './SalesChart';
import ProductsTable from './ProductsTable';
import CustomersPanel from './CustomersPanel';
import OrdersTimeline from './OrdersTimeline';
import InsightsPanel from './InsightsPanel';
import './Dashboard.css';

export default function Dashboard({ data, filters, loading, isRTL, onOpenAIModal }) {
  return (
    <main className="dashboard">
      <div className="dashboard-grid">
        {/* Sales Chart - Full Width */}
        <div className="grid-item full-width">
          <SalesChart isRTL={isRTL} />
        </div>

        {/* Products Table - Full Width */}
        <div className="grid-item full-width">
          <ProductsTable products={data.products} isRTL={isRTL} loading={loading} />
        </div>

        {/* Customers Panel - 2/3 Width */}
        <div className="grid-item two-thirds">
          <CustomersPanel customers={data.customers} isRTL={isRTL} />
        </div>

        {/* Orders Timeline - 1/3 Width */}
        <div className="grid-item one-third">
          <OrdersTimeline orders={data.orders} isRTL={isRTL} />
        </div>

        {/* Insights & Areas to Improve - Full Width */}
        <div className="grid-item full-width">
          <InsightsPanel
            insights={data.insights}
            areasToImprove={data.areasToImprove}
            isRTL={isRTL}
            onGetAISuggestions={onOpenAIModal}
          />
        </div>
      </div>
    </main>
  );
}
