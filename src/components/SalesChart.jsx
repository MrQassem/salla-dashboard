import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { mockRevenueData } from '../services/mockData';
import './SalesChart.css';

export default function SalesChart({ isRTL }) {
  const data = mockRevenueData.map(d => ({
    ...d,
    dateFormatted: new Date(d.date).toLocaleDateString(isRTL ? 'ar-SA' : 'en-US', { month: 'short', day: 'numeric' })
  }));

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>{isRTL ? 'الإيرادات ومتوسط قيمة الطلب' : 'Revenue & AOV Trends'}</h3>
        <div className="chart-legend-custom">
          <div className="legend-item">
            <span className="legend-color" style={{ background: '#3b82f6' }}></span>
            <span>{isRTL ? 'الإيرادات (ر.س)' : 'Revenue (SAR)'}</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ background: '#8b5cf6' }}></span>
            <span>{isRTL ? 'متوسط قيمة الطلب' : 'AOV'}</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorAOV" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
          <XAxis
            dataKey="dateFormatted"
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            yAxisId="left"
            stroke="#3b82f6"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#8b5cf6"
            style={{ fontSize: '12px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1a2332',
              border: '1px solid #2d3748',
              borderRadius: '8px',
              color: '#f9fafb'
            }}
            formatter={(value, name) => {
              if (name === 'revenue') {
                return [`${value.toLocaleString()} SAR`, isRTL ? 'الإيرادات' : 'Revenue'];
              }
              return [`${value.toFixed(2)} SAR`, isRTL ? 'متوسط قيمة الطلب' : 'AOV'];
            }}
          />
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            strokeWidth={2}
            fill="url(#colorRevenue)"
          />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="aov"
            stroke="#8b5cf6"
            strokeWidth={2}
            fill="url(#colorAOV)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
